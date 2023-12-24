import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Dashboard from '../Layout/Dashboard';
import AddTask from '../Pages/Dashboard/AddTask';
import PrivateRoute from './PrivateRoutes';
import MyTasks from '../Pages/Dashboard/MyTasks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },

  {
    path: 'dashboard',

    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),

    children: [
      {
        path: '/dashboard/add-task',
        element: <AddTask></AddTask>,
      },
      {
        path: '/dashboard/my-tasks',
        element: <MyTasks></MyTasks>,
      },
    ],
  },
]);

export default router;
