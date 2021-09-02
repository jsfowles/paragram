import React from 'react';
import Image from 'next/image';
import TwoGrid from '@components/TwoGrid';
import Configuration from '@components/Configuration';
import Social from '@components/Social';

const Home = () => {
  return (
    <>
      <div className="flex w-full relative ">
        <div className="absolute inset-0 bg-black/50" />
        <img
          className="h-screen w-screen object-cover "
          src="/images/home/coral-cover.jpg"
          alt="pink agave"
        />
        <section className="max-content mx-auto absolute inset-0 z-20 pt-12 flex items-center justify-center text-center">
          <div className="">
            <h1 className="pb-3 md:pb-6 text-gray-light">
              Electric Guitars <br /> & Basses
            </h1>
            <h5 className="text-gray-light">
              Handmade in Jalisco,
              <br />
              The heart of Mexico
            </h5>
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
