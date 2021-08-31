import React from 'react';
import FourGrid from '@components/FourGrid';
import DownArrows from '@components/DownArrows';

const Standard = () => {
  return (
    <>
      <div>
        <img
          src="/images/standard/white-cover.jpg"
          className="h-screen w-full object-cover object-top"
        />
        <div className="absolute inset-0 z-40 text-white flex flex-col justify-center items-center bg-black/40">
          <h2 className="uppercase text-5xl">
            Para<span className="text-red">g</span>ram
          </h2>
          <h1 className="text-8xl py-6 text-white">Standard</h1>
          <p className="text-white text-3xl">Your guitar, your sound.</p>
          <DownArrows />
        </div>
      </div>
      <FourGrid
        rowOne={{
          title: 'Simple on the outside, complex on the inside.',
          description:
            'We provide a great blend between traditional and modern trends in the electric guitar industry. Inspired by the classics, we strive to design versatile instruments with superior comfort and playability the modern player seeks.',
          image: '/images/standard/white.jpg',
        }}
        rowTwo={{
          title: 'High Quality Materials',
          description:
            'We source our wood from trusted suppliers who specialize in woods intended for musical instruments. This ensures the proper moisture content of the timber right from the beginning guaranteeing the highests quality builds.',
          image: '/images/standard/stardust.jpg',
        }}
      />
    </>
  );
};

export default Standard;
