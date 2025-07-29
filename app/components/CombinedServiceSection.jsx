
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
    <div id="services" className="to-purple-50 py-20 px-6 sm:px-10 lg:px-24 dark:text-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6 dark:text-white">
          My Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-16 dark:text-white">
          We offer expertise in programming, modern web design, user interface strategy, and strategic tech consultations to help you innovate and grow.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group rounded-2xl p-8 backdrop-blur-xl bg-white/60 border transition-all duration-300 ease-in-out dark:bg-transparent
              flex flex-col items-center justify-center text-center shadow-xl
              hover:shadow-purple-300 hover:-translate-y-2
              ${service.isActive
                ? 'border-purple-600 bg-blue-400 text-white shadow-lg scale-105'
                : 'border-gray-300 text-gray-800'}
            `}
          >
            <div className={`text-5xl mb-4 transition-colors duration-300 dark:text-white ${service.isActive ? 'text-white' : 'text-purple-600 group-hover:text-purple-700'}`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold dark:text-white">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinedServiceSection;
