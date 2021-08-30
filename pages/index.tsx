import React from 'react';
import Image from 'next/image';
import TwoGrid from '@components/TwoGrid';
import Configuration from '@components/Configuration';

const Home = () => {
  return (
    <>
      <div className="flex w-full relative ">
        <div className="absolute inset-0 bg-black/40" />
        <img
          className="h-screen w-screen object-cover "
          src="/images/home/coral-cover.jpg"
          alt="pink agave"
        />
        <section className="max-content mx-auto absolute inset-0 z-20 flex items-center">
          <div className="">
            <h1 className="text-4xl md:text-[4vw] text-gray-light leading-none">
              Para
              <span className="text-red text-4xl md:text-[4vw] leading-none">
                g
              </span>
              ram
            </h1>
            <h1 className="text-4xl md:text-[4vw] pb-6 text-gray-light leading-none">
              Instruments
            </h1>
            <h4 className="pb-3 md:pb-6 md:text-[2vw] text-gray-light leading-none">
              Electric Guitars & Basses
            </h4>
            <h4 className="text-gray-light md:text-[2vw] leading-none">
              HANDMADE IN JALISCO,
              <br /> THE HEART OF MEXICO
            </h4>
          </div>
        </section>
      </div>
      <TwoGrid
        blockOne={{
          img: '/images/home/hollow-body-agave.png',
          title: 'Agave',
          description:
            'Walnut neck reinforced with carbon fiber rods, ebony fretboard, mahogany body+ashtop, McNelly pickups and Wilkinson/Gotoh bridge.',
        }}
        blockTwo={{
          img: '/images/home/standard-agave.png',
          title: 'Standard',
          description:
            'Walnut neck reinforced with carbon fiber rods, ebony fretboard, mahogany body+ashtop, McNelly pickups and Wilkinson/Gotoh bridge.',
        }}
      />
      <TwoGrid
        blockOne={{
          img: '/images/home/continua.png',
          title: 'Continua',
          description:
            'Walnut neck reinforced with carbon fiber rods, ebony fretboard, mahogany body+ashtop, McNelly pickups and Wilkinson/Gotoh bridge.',
        }}
        blockTwo={{
          img: '/images/home/bass.png',
          title: 'Bass',
          description:
            'Walnut neck reinforced with carbon fiber rods, ebony fretboard, mahogany body+ashtop, McNelly pickups and Wilkinson/Gotoh bridge.',
        }}
        bgColor="bg-gray-dark"
        textColor="text-white"
      />

      <Configuration image="/images/home/config.png" />
    </>
  );
};

export default Home;
