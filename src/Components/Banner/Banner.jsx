import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/free-photo/system-developers-analyzing-code-wall-screen-tv-looking-errors-while-team-coders-collaborate-artificial-intelligence-project-programmers-working-together-machine-learning-software_482257-41819.jpg?w=2000&t=st=1703165100~exp=1703165700~hmac=5c7d2c722ea5c164d712d6bc8513d229eb09b5fbb0b4fc7a6be73722fe02dc6f)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold py-3 md:py-10 leading-tight">Ease Your Developer Life</h1>

          <button className="btn bg-purple-500 text-white hover:bg-purple-700 border-0">
            Explore Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
