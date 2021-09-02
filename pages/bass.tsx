import React from 'react';
import PopupModal from '@components/Popup';
import FourGrid from '@components/FourGrid';
import DownArrows from '@components/DownArrows';

const Bass = () => {
  return (
    <>
      <div>
        <img
          src="/images/bass/mint-cover.jpg"
          className="h-screen w-full object-cover object-top"
        />
        <div className="absolute inset-0 z-40 text-white flex flex-col justify-center items-center bg-black/40">
          <h1 className="text-[20vw] md:text-[10vw] py-6 text-white underline-hero relative">
            Bass
          </h1>
          <h5 className="text-white">Your guitar, your sound.</h5>
          <DownArrows />
        </div>
      </div>
      <FourGrid
        rowOne={{
          title: 'Tailor made neck shapes and sizing',
          description:
            'We will work with you to design the perfect neck shape based on your preferences, playing style and hand size. We can also match or modify the neck shape of one of your favorite bass so that your custom electric bass will feel like an old friend. Contact us to learn more now!',
          image: '/images/bass/agave-bass.jpg',
        }}
        rowTwo={{
          title: 'The process',
          description:
            'Paragram guitars are individually crafted into works of art built to play with incredible ease, sound fantastic, and last for generations. Each guitar neck and body is built from scratch using the finest instrument woods, electronics and hardware available.',
          image: '/images/bass/pink.jpg',
        }}
      />
    </>
  );
};

export default Bass;
