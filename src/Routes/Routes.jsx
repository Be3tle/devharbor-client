import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Dashboard from '../Layout/Dashboard';
import PrivateRoute from './PrivateRoutes';

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
    element: <Dashboard></Dashboard>,

    children: [{}],
  },
]);

export default router;
