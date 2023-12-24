import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AddTask = () => {
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    if (user && user.email) {
      const taskItem = {
        email: user.email,
        title: data.title,
        priority: data.priority,
        deadline: data.deadline,
        description: data.description,
      };
      axiosSecure.post('/tasks', taskItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Task added',
            showConfirmButton: false,
            timer: 2500,
          });
          // refetch req to update the req items count
          reset();
        }
      });
    }
  };
  return (
    <div>
      <div>
        <section className="py-6 max-h-full bg-zinc-100">
          <div className="grid max-w-xl grid-cols-1 px-6 mx-auto lg:px-8 md:divide-x py-10=">
            <div className="mb-7 md:py-0 md:px-6 text-center">
              <h1 className="text-xl font-bold text-gray-500">Create A Task</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Add title"
                  {...register('title')}
                  className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-700 focus:border-violet-400"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Priority
                </label>
                <select
                  className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-700 focus:border-violet-400"
                  name="recDistrict"
                  {...register('priority', { required: true })}
                >
                  <option value="">Select</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Deadline
                </label>
                <input
                  type="date"
                  name="date"
                  {...register('deadline', { required: 'Date is required' })}
                  className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-900 focus:border-violet-400"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-500">
                  Description
                </label>
                <textarea
                  {...register('description', {
                    required: 'Description is required',
                  })}
                  rows="3"
                  className="block w-full rounded-md text-gray-700 focus:ring focus:ri focus:ri"
                ></textarea>
              </div>

              <input
                className="block w-full p-3 text-center rounded-sm text-gray-50 bg-gray-600"
                type="submit"
                value="Create"
              />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddTask;
