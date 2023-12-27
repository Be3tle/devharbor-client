import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Task from '../../Components/Task/Task';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const MyTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [tasks, setTasks] = useState();
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/tasks/${user?.email}`)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  useEffect(() => {
    if (tasks) {
      const todo = tasks.filter((task) => task.status === 'todo') || [];
      const doing = tasks.filter((task) => task.status === 'doing') || [];
      const done = tasks.filter((task) => task.status === 'done') || [];

      setTodoTasks(todo);
      setDoingTasks(doing);
      setDoneTasks(done);
    }
  }, [tasks]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => addItemToSection(item._id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    console.log('dropped', id);
    const onGoing = tasks?.find((task) => id === task._id);
    if (onGoing) {
      setDoingTasks((doing) => [...doing, onGoing]);
    }
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
        {/* To-Do list */}
        <div className="rounded-xl p-5 bg-gray-800" ref={drop}>
          <h2 className="text-2xl font-bold text-white text-center">To-Do</h2>
          <ul className="py-4 flex flex-col gap-2">
            {todoTasks.map((item, index) => (
              <Task key={index} item={item} />
            ))}
          </ul>
        </div>
        {/* Doing list */}
        <div className="rounded-xl p-5 bg-gray-800" ref={drop}>
          <h2 className="text-2xl font-bold text-white text-center">Doing</h2>
          <ul className="py-4 flex flex-col gap-2">
            {doingTasks.map((item, index) => (
              <Task key={index} item={item} />
            ))}
          </ul>
        </div>
        {/* Done list */}
        <div className="rounded-xl p-5 bg-gray-800" ref={drop}>
          <h2 className="text-2xl font-bold text-white text-center">Done</h2>
          <ul className="py-4 flex flex-col gap-2">
            {doneTasks.map((item, index) => (
              <Task key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
