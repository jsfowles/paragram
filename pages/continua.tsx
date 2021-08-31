import React from 'react';
import FourGrid from '@components/FourGrid';
import DownArrows from '@components/DownArrows';

const Continua = () => {
  return (
    <>
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
          <DownArrows />
        </div>
      </div>
      <FourGrid
        rowOne={{
          title: 'Built with our bare hands',
          description:
            'Built by craftsman with a passion for sound and aesthetic, every instrument is painstakingly crafted with care and attention to the smallest detail. Starting with your vision and desires, we create one of a kind dreams, perfectly tailored to the musicians that play them.',
          image: '/images/continua/natural.jpg',
        }}
        rowTwo={{
          title: 'Make it yours',
          description:
            'With your vision in mind, our builders cut, sand, carve and craft the finest materials, into the guitar you have always dreamed about.',
          image: '/images/continua/white.jpg',
        }}
      />
    </>
  );
};

export default Continua;
