import React from 'react';
import Image from 'next/image';
import TwoGrid from '@components/twoGrid';
import Configuration from '@components/configuration';

const Home = () => {
  return (
    <>
      <div className="flex w-full relative ">
        <div className=" w-full absolute top-0 z-10 h-[40vh] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
        <img
          className="h-screen w-screen object-cover"
          src="/images/home/hollow-body-agave.png"
          alt="pink agave"
        />
        <section className="min-content mx-auto absolute inset-0 z-20 flex items-center">
          <div className="">
            <h1 className="text-5xl text-white">
              Para
              <span className="text-red">g</span>
              ram
            </h1>
            <h1 className="text-5xl pb-6 text-white">Instruments</h1>
            <h4 className="pb-6 text-white">Electric Guitars & Basses</h4>
            <h4 className="text-white">
              HANDMADE IN JALISCO,
              <br /> THE HEART OF MEXICO
            </h4>
          </div>
        </section>
      </div>
      <TwoGrid
        blockOne={{
          img: '/images/home/hollow-body-agave.png',
          title: 'hollobody agave',
          description:
            'Walnut neck reinforced with carbon fiber rods, ebony fretboard, mahogany body+ashtop, McNelly pickups and Wilkinson/Gotoh bridge.',
        }}
        blockTwo={{
          img: '/images/home/standard-agave.png',
          title: 'standard agave',
          description:
            'Walnut neck reinforced with carbon fiber rods, ebony fretboard, mahogany body+ashtop, McNelly pickups and Wilkinson/Gotoh bridge.',
        }}
      />
      <TwoGrid
        blockOne={{
          img: '/images/home/continua.png',
          title: 'hollobody agave',
          description:
            'Walnut neck reinforced with carbon fiber rods, ebony fretboard, mahogany body+ashtop, McNelly pickups and Wilkinson/Gotoh bridge.',
        }}
        blockTwo={{
          img: '/images/home/bass.png',
          title: 'standard agave',
          description:
            'Walnut neck reinforced with carbon fiber rods, ebony fretboard, mahogany body+ashtop, McNelly pickups and Wilkinson/Gotoh bridge.',
        }}
        bgColor="gray-dark"
        textColor="white"
      />

      <Configuration image="/images/home/config.png" />
    </>
  );
};

export default Home;
