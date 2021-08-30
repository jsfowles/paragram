import React from 'react';

const Continua = () => {
  return (
    <div>
      <img
        src="/images/continua/ash-white.jpg"
        className="h-screen w-full object-cover object-top relative"
      />
      <div className="absolute inset-0 z-40 text-white flex flex-col justify-center items-center bg-black/40">
        <h2 className="uppercase text-5xl">
          Para<span className="text-red">g</span>ram
        </h2>
        <h1 className="text-8xl py-6 text-white">Continua</h1>
        <p className="text-white text-3xl">Your guitar, your sound.</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 absolute bottom-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Continua;
