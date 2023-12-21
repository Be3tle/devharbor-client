const Featured = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.freepik.com/free-photo/group-graphics-designers-using-digital-tablet-while-having-coffee_1170-971.jpg?w=740&t=st=1703172714~exp=1703173314~hmac=85b750dbcc061a602011a2ae4e49b97495cadbe30f6abeec694917de81efb04e"
          className="w-96 rounded-lg shadow-2xl"
        />
        <div className="pl-10">
            <p className="text-base uppercase">--- Our Introduction</p>
          <h1 className="text-5xl font-bold uppercase">Welcome to <span className="text-purple-500">devharbor</span></h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
