import React from 'react';
import FourGrid from '@components/FourGrid';
import DownArrows from '@components/DownArrows';

const Agave = () => {
  return (
    <>
      <div>
        <img
          src="/images/home/hollow-body-agave.png"
          className="h-screen w-full object-cover object-top"
        />
        <div className="absolute inset-0 z-40 text-white flex flex-col justify-center items-center bg-black/40">
          <h2 className="uppercase text-5xl">
            Para<span className="text-red">g</span>ram
          </h2>
          <h1 className="text-8xl py-6 text-white">Agave</h1>
          <p className="text-white text-3xl">Your guitar, your sound.</p>
          <DownArrows />
        </div>
      </div>
      <FourGrid
        rowOne={{
          title: 'The little things',
          description:
            ' Our base spec includes top tier locking tuners, a fixed bridge by Hipshot, Jescar stainless steel frets, and CTS potentiometers. However, it doesnt stop there! Each aspect of the build can be upgraded and customized as you wish!',
          image: '/images/agave/fixed.jpg',
        }}
        rowTwo={{
          title: 'Individualism',
          description:
            'Each build receives our utmost attention. We start by providing you with a computer visualisation, follow up by discussing each aspect of the build, and finish off by bringing your dream guitar to life. ',
          image: '/images/agave/bigsby.jpg',
        }}
      />
    </>
  );
};

export default Agave;
