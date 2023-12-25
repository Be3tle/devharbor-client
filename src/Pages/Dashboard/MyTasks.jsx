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

      <div className="flex gap-20 justify-center">
        {/* 1 */}
        <div className="flex flex-col justify-center items-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">To-Do</h2>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col justify-center items-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">On Going</h2>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col justify-center items-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">Completed</h2>
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto p-10 pl-52">
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
