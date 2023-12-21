import { BiSolidBookAdd } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';

const Featured = () => {
  return (
    <div className="hero min-h-screen bg-slate-100">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.freepik.com/free-photo/group-graphics-designers-using-digital-tablet-while-having-coffee_1170-971.jpg?w=740&t=st=1703172714~exp=1703173314~hmac=85b750dbcc061a602011a2ae4e49b97495cadbe30f6abeec694917de81efb04e"
          className="w-80 md:w-96 rounded-lg shadow-2xl"
        />
        <div className="md:pl-32 pt-5 md:pt-0">
          <p className="text-base uppercase py-3">--- Our Introduction</p>
          <h1 className="text-5xl font-bold uppercase">
            Welcome to <span className="text-purple-500">devharbor</span>
          </h1>
          <p className="py-6 text-justify">
            Your ultimate destination for streamlined development task
            management! At DevHarbor, we believe in powering your team's success
            by providing a dynamic and collaborative environment for managing
            coding tasks.
          </p>

          <div className="flex p-5 mb-5 bg-base-100 shadow-2xl rounded-l-full">
            <BiSolidBookAdd className="p-4 rounded-full bg-purple-500 text-6xl text-white" />
            <p className="text-xl p-3 pl-7 font-medium">Create Tasks</p>
          </div>
          <div className="flex p-5 mb-8 bg-base-100 shadow-2xl rounded-l-full">
            <FaEdit className="p-4 rounded-full bg-purple-500 text-6xl text-white" />
            <p className="text-xl p-3 pl-7 font-medium">Moderate Tasks</p>
          </div>

          <button className="btn bg-purple-500 text-white hover:bg-purple-700 border-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
