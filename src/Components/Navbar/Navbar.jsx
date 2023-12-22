import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = (
    <div className="md:flex text-base">
      <li>
        <a href="/">Home</a>
      </li>

      <li>
        <a href="">Dashboard</a>
      </li>

      <li>
        <a href="">Blog</a>
      </li>

      <li>
        <a href="">About Us</a>
      </li>
    </div>
  );

  return (
    <div className="navbar md:fixed z-10 bg-opacity-70 md:bg-opacity-30  bg-black text-white max-w-screen-2xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-neutral rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <div>
            <img className="w-20" src="/assets/img/logo.png" alt="" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="login"
          className="btn bg-gray-500 text-white hover:bg-gray-700 border-0"
        >
          Log In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
