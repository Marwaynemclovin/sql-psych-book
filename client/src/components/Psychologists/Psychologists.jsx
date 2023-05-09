import React from 'react';
import PsychOne from '../../assets/Psych1.png';
import PsychTwo from '../../assets/Psych2.png';
import PsychThree from '../../assets/Psych3.png';
import PsychFour from '../../assets/Psych4.png';
import PsychFive from '../../assets/Psych5.png';
import PsychSix from '../../assets/Psych6.png';

const Psychologists = () => {
  return (
    <div className="px-30">
      <h1 className="text-4xl font-bold text-center mb-8">Our Current Psychs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center bg-amber-300">
          <img src={PsychOne} alt="Psych One" className="rounded-full w-100 h-100 object-cover mb-2" />
          <p className="font-bold text-lg">Jane Smith</p>
          <p className="text-gray-600">PhD in Psychology</p>
        </div>
        <div className="flex flex-col items-center bg-green-400">
          <img src={PsychTwo} alt="Psych Two" className="rounded-full w-100 h-100 object-cover mb-2" />
          <p className="font-bold text-lg">John Doe</p>
          <p className="text-gray-600">MA in Counseling</p>
        </div>
        <div className="flex flex-col items-center bg-orange-300">
          <img src={PsychThree} alt="Psych Three" className="rounded-full w-100 h-100 object-cover mb-2" />
          <p className="font-bold text-lg">Bob Johnson</p>
          <p className="text-gray-600">PhD in Clinical Psychology</p>
        </div>
        <div className="flex flex-col items-center bg-pink-300">
          <img src={PsychFour} alt="Psych Four" className="rounded-full w-100 h-100 object-cover mb-2" />
          <p className="font-bold text-lg">Max Smith</p>
          <p className="text-gray-600">MA in Mental Health Counseling</p>
        </div>
        <div className="flex flex-col items-center bg-purple-300">
          <img src={PsychFive} alt="Psych Five" className="rounded-full w-100 h-100 object-cover mb-2" />
          <p className="font-bold text-lg">Sara Lee</p>
          <p className="text-gray-600">MS in Psychology</p>
        </div>
        <div className="flex flex-col items-center bg-teal-300">
          <img src={PsychSix} alt="Psych Six" className="rounded-full w-100 h-100 object-cover mb-2" />
          <p className="font-bold text-lg">Molly Green</p>
          <p className="text-gray-600">PhD in Clinical Psychology</p>
        </div>
      </div>
    </div>
  );
};

export default Psychologists;
