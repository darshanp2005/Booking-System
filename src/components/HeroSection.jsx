import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react';
import backgroundImage from '../assets/backgroundImage.png';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  
  const navigate = useNavigate();

  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 px-6 md:px-16 lg:px-36
        bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Left Content */}
      <div className="flex flex-col items-start justify-center gap-4">
        <img src={assets.marvelLogo} alt="" className="max-h-11 lg:h-11 mt-20" />

        <h1 className="text-2xl md:text-[60px] md:leading-[5rem] font-semibold max-w-[44rem] text-white">
          Some journeys don’t return.<br /> Some change the universe forever.
        </h1>

        <div className="flex items-center gap-4 text-gray-300">
          <span>Adventure | Action | Sci-Fi</span>
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4.5 h-4.5" /> 2025
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4.5 h-4.5" /> 3h 10m
          </div>
        </div>

        <button
          onClick={() => navigate('/movies')}
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold 
            text-white bg-gradient-to-r from-blue-600 to-blue-500 
            hover:from-blue-700 hover:to-blue-600 
            transition duration-300 rounded-full shadow-md 
            hover:shadow-lg cursor-pointer"
        >
          Watch Movies
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* //TODO: Pricing card */}
{/* Responsive Pricing Card */}
<div className="w-full max-w-sm lg:max-w-xs bg-black bg-opacity-80 p-6 rounded-2xl shadow-xl text-white mx-auto">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-xl font-bold">Standard</h3>
    <div className="flex items-center space-x-2">
      <span className={`text-sm ${!isYearly ? 'font-medium' : 'text-gray-400'}`}>Monthly</span>
      <button
        type="button"
        onClick={toggleBilling}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors 
          ${isYearly ? 'bg-indigo-600' : 'bg-gray-300'}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform 
            ${isYearly ? 'translate-x-6' : 'translate-x-1'}`}
        ></span>
      </button>
      <span className={`text-sm ${isYearly ? 'font-medium' : 'text-gray-400'}`}>Yearly</span>
    </div>
  </div>

  <p className="text-gray-400 text-sm mb-4">For individuals and small teams.</p>

  <div className="flex items-baseline gap-1 mb-4">
    <span className="text-3xl font-bold">{isYearly ? '$15' : '$19'}</span>
    <span className="text-sm text-gray-400">
      {isYearly ? '/month, billed yearly' : '/month'}
    </span>
  </div>

  {isYearly && (
    <div className="mb-4 text-xs text-indigo-400 border border-indigo-500 px-2 py-1 rounded-full w-fit">
      Save 20% with yearly billing
    </div>
  )}

  <ul className="space-y-2 mb-6 text-sm text-gray-300">
    {[
      '10 projects',
      '30GB storage',
      'Priority support',
      'Basic analytics',
      'Unlimited projects',
      '24/7 phone & email support',
    ].map((feature, index) => (
      <li key={index} className="flex items-center gap-2">
        <svg
          className="h-4 w-4 text-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        {feature}
      </li>
      ))}
    </ul>

     <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white text-sm font-semibold cursor-pointer">
    Subscribe Now
    </button>
    </div>  
    {/* TODO: card ending */}

    </div>
  );
}

export default HeroSection;
