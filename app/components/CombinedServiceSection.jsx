
import React from 'react';
import { FaComputer } from "react-icons/fa6";
import { TbWorld, TbUxCircle } from "react-icons/tb";
import { SiConsul } from "react-icons/si";

const CombinedServiceSection = () => {
  const services = [
    { icon: <FaComputer />, title: 'Programming', isActive: false },
    { icon: <TbWorld />, title: 'Web Design', isActive: true },
    { icon: <TbUxCircle />, title: 'UI/UX', isActive: false },
    { icon: <SiConsul />, title: 'Consultation', isActive: false },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-purple-50 min-h-screen py-20 px-6 sm:px-10 lg:px-24">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-4 leading-tight">
            Any Type of Service <br className="hidden sm:block" /> and Discussions
          </h2>
        </div>
        <div className="lg:w-1/2 text-gray-700 text-lg text-center lg:text-left">
          <p>
            We offer expertise in programming, modern web design, user interface strategy, and strategic tech consultations to help you innovate and grow.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group rounded-2xl p-8 backdrop-blur-xl bg-white/60 border transition-all duration-300 ease-in-out
              flex flex-col items-center justify-center text-center shadow-xl
              hover:shadow-purple-300 hover:-translate-y-2
              ${service.isActive
                ? 'border-purple-600 text-white bg-purple-700 shadow-lg scale-105'
                : 'border-gray-300 text-gray-800'}
            `}
          >
            <div className={`text-5xl mb-4 transition-colors duration-300 ${service.isActive ? 'text-white' : 'text-purple-600 group-hover:text-purple-700'}`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinedServiceSection;
