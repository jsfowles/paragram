import React from 'react';

const FourGrid = ({ rowOne, rowTwo }) => {
  return (
    <div className="grid gap-y-10 lg:gap-y-0 p-[7vw]">
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-0 items-center">
        <div className="space-y-4 lg:px-20 max-w-[800px] justify-self-center lg:justify-self-end relative">
          <h3 className="text-2xl sm:text-4xl w-[16ch] ">{rowOne.title}</h3>
          <p className="text-lg">{rowOne.description}</p>
        </div>
        <div className=" ">
          <img
            src={rowOne.image}
            alt=""
            className="max-h-[1200px] object-contain"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-0 items-center">
        <div className=" order-last lg:order-first flex justify-end">
          <img
            src={rowTwo.image}
            alt=""
            className="max-h-[1200px] object-contain"
          />
        </div>
        <div className="space-y-4 lg:px-20 max-w-[800px] justify-self-center lg:justify-self-start">
          <h3 className="text-2xl sm:text-4xl">{rowTwo.title}</h3>
          <p className="text-lg ">{rowTwo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FourGrid;
