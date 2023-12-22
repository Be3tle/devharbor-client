import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const [regError, setRegError] = useState('');

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      updateUserProfile(data.name, data.photoURL, data.email)
        .then(() => {
          // create user info in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            photoURL: data.photoURL,
          };
          console.log(userInfo);
          axiosPublic.post('/users', userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log('user added to the database');
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully',
                showConfirmButton: false,
                timer: 2000,
              });
              navigate('/');
            }
          });
        })
        .catch((error) => {
          console.error(error);
          setRegError(error.message);
        });
    });
  };

  return (
    <div className="text-center flex justify-center items-center">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col-reverse lg:flex-row md:gap-7">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-slate-100 text-gray-100 md:mt-20">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6"
            >
              <div className="space-y-1 text-sm">
                <label className="block text-gray-500">Full Name</label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-500 text-gray-300"
                />
                {errors.name && (
                  <span className="text-red-500">Full Name is required</span>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <label className="block text-gray-500">Photo URL</label>
                <input
                  type="text"
                  {...register('photoURL', { required: true })}
                  placeholder="Photo URL"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-500 text-gray-300"
                />
                {errors.photoURL && (
                  <span className="text-red-500">Photo is required</span>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <label className="block text-gray-500">Email</label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-500 text-gray-3000"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <label className="block text-gray-500">Password</label>
                <input
                  type="password"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                  })}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-500 text-gray-300"
                />

                {errors.password?.type === 'required' && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className="text-red-500">
                    Password must be at least 6 characters
                  </span>
                )}
              </div>
              {regError && <p className="text-red-600">{regError}</p>}
              <input
                className="block w-full p-3 text-center rounded-sm text-gray-50 bg-gray-600"
                type="submit"
                value="Register"
              />
            </form>

            <p className="text-xs text-center sm:px-6 text-gray-400">
              Already have an account?
              <a
                rel="noopener noreferrer"
                href="/login"
                className="underline text-gray-600"
              >
                Log in
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

export default Register;
