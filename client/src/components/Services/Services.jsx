import React from 'react';
import Addiction from '../../assets/Addiction.png';
import ADHD from '../../assets/ADHD.png';
import Anxiety from '../../assets/Anxiety.png';
import CBT from '../../assets/CBT.png';
import Depression from '../../assets/Depression.png';
import Grief from '../../assets/Grief.png';
import NDIS from '../../assets/NDIS.png';
import Online from '../../assets/Online.png';
import Trauma from '../../assets/Trauma.png';

const Services = () => {
  return (
    <div className="w-3/4 mx-auto pt-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative bg-amber-300 mb-4 md:mb-0">
          <img src={Addiction} alt="Addiction" className="rounded-full w-100 h-100 object-cover mb-2" />
          <div className="absolute bottom-0 w-full text-center">
            <p className="font-bold text-lg">Addiction</p>
          </div>
        </div>
        <div className="relative bg-green-400 mb-4 md:mb-0">
          <img src={ADHD} alt="ADHD" className="rounded-full w-100 h-100 object-cover mb-2" />
          <div className="absolute bottom-0 w-full text-center">
            <p className="font-bold text-lg">ADHD</p>
          </div>
        </div>
        <div className="relative bg-orange-300 mb-4 md:mb-0">
          <img src={Anxiety} alt="Anxiety" className="rounded-full w-100 h-100 object-cover mb-2" />
          <div className="absolute bottom-0 w-full text-center">
            <p className="font-bold text-lg">Anxiety</p>
          </div>
        </div>
        <div className="relative bg-pink-300 mb-4 md:mb-0">
          <img src={CBT} alt="CBT" className="rounded-full w-100 h-100 object-cover mb-2" />
          <div className="absolute bottom-0 w-full text-center">
            <p className="font-bold text-lg">CBT</p>
          </div>
        </div>
        <div className="relative bg-purple-300 mb-4 md:mb-0">
          <img src={Depression} alt="Depression" className="rounded-full w-100 h-100 object-cover mb-2" />
          <div className="absolute bottom-0 w-full text-center">
            <p className="font-bold text-lg">Depression</p>
          </div>
        </div>
        <div className="relative bg-teal-300 mb-4 md:mb-0">
          <img src={Grief} alt="Grief" className="rounded-full w-100 h-100 object-cover mb-2" />
          <div className="absolute bottom-0 w-full text-center">
            <p className="font-bold text-lg">Grief</p>
          </div>
        </div>
        <div className="relative bg-yellow-300 mb-4 md:mb-0">
          <img src={NDIS} alt="NDIS" className="rounded-full w-100 h-100 object-cover mb-2" />
          <div className="absolute bottom-0 w-full text-center">
            <p className="font-bold text-lg">NDIS</p>
          </div>
        </div>
            <div className="relative bg-blue-300 mb-4 md:mb-0">
        <img src={Online} alt="Online" className="rounded-full w-100 h-100 object-cover mb-2" />
        <div className="absolute bottom-0 w-full text-center">
          <p className="font-bold text-lg">Online</p>
        </div>
      </div>
      <div className="relative bg-gray-400 mb-4 md:mb-0">
        <img src={Trauma} alt="Trauma" className="rounded-full w-100 h-100 object-cover mb-2" />
        <div className="absolute bottom-0 w-full text-center">
          <p className="font-bold text-lg">Trauma</p>
        </div>
            </div>
            </div>
    </div>
  );
};

export default Services;
