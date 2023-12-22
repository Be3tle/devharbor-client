import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
const Login = () => {
  const [loginError, setLoginError] = useState('');
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  console.log('state in the location login page', location.state);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate after login
        navigate(location?.state ? location?.state : '/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console
          .log(loggedInUser)

          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              // navigate after login
              navigate(from, { replace: true });
              navigate(location?.state ? location.state : '/');
            }
          });

        // get access  token
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  return (
    <div className="text-center flex justify-center items-center">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row md:gap-7">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-slate-100 text-gray-100 md:mt-28">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form
              onSubmit={handleLogin}
              noValidate=""
              action=""
              className="space-y-6"
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="text-left text-gray-500">
                  Username or Email
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-500 text-gray-300"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="text-left text-gray-500">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-500 text-gray-300"
                />
              </div>

              {loginError && <p className="text-red-600 my-5">{loginError}</p>}

              <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-gray-600">
                Log in
              </button>
            </form>

            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
              <p className="px-3 text-sm text-gray-400">Login with Google</p>
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleGoogleSignIn}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 text-gray-500 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>

            <p className="text-xs text-center sm:px-6 text-gray-600">
              New here?
              <a
                rel="noopener noreferrer"
                href="/register"
                className="underline text-gray-700"
              >
                Create an account
              </a>
            </p>
          </div>

          <div className="text-center lg:text-left">
            <img
              src="https://img.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg?w=1060&t=st=1703238183~exp=1703238783~hmac=862d9ff0ee63efe6bf041542e4d61900acae547b69d8f749ad3e2585f12f75ac"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
