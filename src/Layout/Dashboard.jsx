import React from 'react';
import {
  FaHome,
  FaList,
  FaRegNewspaper,
  FaUser,
  FaUsers,
  FaBlog,
} from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Dashboard = () => {
  return (
    <div className="flex text-white">
      {/* sidebar */}
      <div className="w-58 min-h-screen bg-gray-600">
        <ul className="menu p-4">
          <li className="py-1">
            <NavLink to="/dashboard">
              <FaHome />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/admin-home">
              <FaUser />
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/all-donation-requests">
              <FaList />
              My Tasks
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/create-donation-request">
              <IoCreate />
              Add A Task
            </NavLink>
          </li>
        </ul>
      </div>

      {/* content */}
      <div className="flex-1">
        <Navbar></Navbar>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
