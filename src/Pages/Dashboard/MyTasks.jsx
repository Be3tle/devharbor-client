import { useEffect, useState } from 'react';
import useTask from '../../Hooks/useTask';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const MyTasks = () => {
  // const [task] = useTask();
  const axiosSecure = useAxiosSecure();
  const [tasks, setTasks] = useState();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure
      .get(`/tasks/${user.email}`)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="text-black">
      <h1 className="text-3xl font-bold text-center py-7"> My Tasks</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Priority</th>
              <th>Description</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {tasks?.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.priority}</td>
                <td>{item.description}</td>
                <th>{item.deadline}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTasks;
