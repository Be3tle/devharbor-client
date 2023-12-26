import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Task from '../../Components/Task/Task';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const MyTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [tasks, setTasks] = useState(null);
  const [todo, setTodo] = useState(null);
  const [doing, setDoing] = useState(null);
  const [done, setDone] = useState(null);

  const handleDelete = (id) => {
    // console.log(id)
    axiosPublic
      .delete(`/tasks/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          toast.success('Task Deleted');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosSecure
      .get(`/tasks/${user?.email}`)
      .then((res) => {
        // console.log(res.data)
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, handleDelete]);

  useEffect(() => {
    const todo = tasks?.filter((task) => task.status === 'todo');
    const doing = tasks?.filter((task) => task.status === 'doing');
    const done = tasks?.filter((task) => task.status === 'done');

    setTodo(todo);
    setDoing(doing);
    setDone(done);
  }, [tasks]);

  const statuses = ['todo', 'doing', 'done'];

  const [collectedProps, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => addItemToSection(item.id, item.status),
    collect: (monitor) => ({
      endDrag: monitor.getDropResult(),
    }),
  }));
  // console.log(drop)

  const addItemToSection = (id, status) => {
    console.log('dropped', id, status);
    // setTasks((prev)=>{
    //   console.log("prev",prev)
    //   return prev
    // })
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-500 text-center pb-3 pt-7">
          My Tasks
      </h1>
      <div
        className="p-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
        ref={drop}
      >
        {/* to do list */}
        <div className="rounded-xl p-5 bg-gray-800" ref={drop}>
          <h2 className="text-2xl font-bold text-white text-center">To-Do</h2>
          <ul className="py-4 flex flex-col gap-2">
            {todo?.map((item, index) => (
              <Task handleDelete={handleDelete} key={index} item={item} />
            ))}
          </ul>
        </div>
        {/* on going list */}
        <div className="rounded-xl p-5 bg-gray-800" ref={drop}>
          <h2 className="text-2xl font-bold text-white text-center">Doing</h2>
          <ul className="py-4 flex flex-col gap-2">
            {doing?.map((item, index) => (
              <Task handleDelete={handleDelete} key={index} to={item} />
            ))}
          </ul>
        </div>
        {/* complete list */}
        <div className="rounded-xl p-5 bg-gray-800" ref={drop}>
          <h2 className="text-2xl font-bold text-white text-center">Done</h2>
          <ul className="py-4 flex flex-col gap-2">
            {done?.map((item, index) => (
              <Task handleDelete={handleDelete} key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
