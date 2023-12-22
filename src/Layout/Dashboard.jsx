import React, { useContext } from 'react';
import { FaChrome, FaDashcube, FaHome, FaList, FaStore, FaUser } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <div className="flex text-white">
      {/* sidebar */}
      <div className="w-58 min-h-screen bg-gray-600">
        <ul className="menu p-4">
          <li className="py-1">
            <div>
              <img src={user?.photoURL} className="w-10 rounded-full" alt="" />
              <h1 className="font-bold text-base">{user?.displayName}</h1>
            </div>
          </li>

          <li className="py-1">
            <NavLink to="/dashboard/">
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
              Add A Task
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
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
