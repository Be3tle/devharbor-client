import { FaHome, FaList, FaStore } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Dashboard = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  const { user, loading } = useAuth();

  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-58 min-h-screen text-white bg-gray-600">
        <ul className="menu p-4">
          <li className="py-1">
            <div>
              <img src={user?.photoURL} className="w-10 rounded-full" alt="" />
              <h1 className="font-bold text-base">{user?.displayName}</h1>
            </div>
          </li>

          <li className="py-1">
            <NavLink to="/dashboard">
              <FaStore />
              Dashboard
            </NavLink>
          </li>
          <li className="py-1">
            <NavLink to="/dashboard/my-tasks">
              <FaList />
              My Tasks
            </NavLink>
          </li>

          <li className="py-1">
            <NavLink to="/dashboard/add-task">
              <IoCreate />
              Add Task
            </NavLink>
          </li>
          <li className="py-1">
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>

      {/* content */}
      <div className="flex-1">
        {isDashboard && (
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center uppercase py-10 tracking-widest font-bold text-5xl text-black">
              Welcome to dashboard
            </h1>

            <div className="flex flex-col justify-center items-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
              <img
                src={user.photoURL}
                alt=""
                className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
              />
              <div className="space-y-4 text-center divide-y divide-gray-700">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    {user.displayName}
                  </h2>
                  {user.designation ? (
                    <p className="px-5 text-xs sm:text-base text-gray-400">
                      {user.designation}
                    </p>
                  ) : (
                    <p className="px-5 text-xs sm:text-base text-gray-400">
                      Fullstack Developer
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
