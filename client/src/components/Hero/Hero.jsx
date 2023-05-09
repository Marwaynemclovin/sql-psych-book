import React from 'react';
import heroImage from '../../assets/Hero.png';
import { Link } from "react-router-dom";

const Hero = () => {
  const [showHero, setShowHero] = React.useState(false);

  React.useEffect(() => {
    setShowHero(true);
  }, []);

  return (
      <div
        className={`w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center text-white ${
          showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-1000 ease-in-out`}
      >
        <img className="lg:w-3/6 md:w-4/6 w-5/6 mb-10 sm:pt-10 object-cover object-center" alt="hero" src={heroImage} />
        <div>
          <div className="text-center">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Everyone Deserves Happiness
            </h1>
            <p className="text-2xl mb-8">
              What Kind of Psychologist are you seeking?
            </p>
            <div className="flex flex-wrap justify-center mx-auto">
            <Link to="/get-matched" className=" bg-white text-gray-800 font-bold rounded-full py-4 px-8 mx-2 mb-4 transform hover:scale-110" style={{ maxWidth: "50%" }}>
              Get Matched with a Psych
            </Link>
            <Link to="/book" className=" bg-white text-gray-800 font-bold rounded-full py-4 px-8 mx-2 mb-4 transform hover:scale-110" style={{ maxWidth: "50%" }}>
              Make An Appointment
            </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
