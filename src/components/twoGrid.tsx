import React from 'react';
import Button from '@components/button';

interface Image {
  img: string;
  title: string;
  description: string;
}
interface Props {
  blockOne: Image;
  blockTwo: Image;
  bgColor?: string;
  textColor?: string;
}
const TwoGrid = ({ blockOne, blockTwo, bgColor, textColor }: Props) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-[7vw] place-content-center lg:h-screen p-[7vw] bg-${bgColor}`}
    >
      <div className="w-full relative">
        <div className="aspect-w-11 aspect-h-12 animate">
          <img
            src={blockOne.img}
            className="object-cover object-center"
            alt="Person typing on a laptop keyboard"
          />
          <div className="animate bg-black/20 hover:bg-black/0 absolute inset-0 z-50" />
        </div>
        <div
          className={`text-${textColor} w-full flex md:flex-row flex-col justify-between md:items-center`}
        >
          <div className="md:w-3/5">
            <h4 className="pt-3 pb-2 font-bold uppercase">{blockOne.title}</h4>
            <p>{blockOne.description}</p>
          </div>
          <div className="pt-3 lg:pt-0 pr-10">
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <div className="aspect-w-11 aspect-h-12">
          <img
            src={blockTwo.img}
            className="object-cover object-center"
            alt="Person typing on a laptop keyboard"
          />
          <div className="animate bg-black/20 hover:bg-black/0 absolute inset-0 z-50" />
        </div>
        <div
          className={`text-${textColor} w-full flex md:flex-row flex-col justify-between md:items-center`}
        >
          <div className="md:w-3/5">
            <h4 className="pt-3 pb-2 font-bold uppercase ">{blockTwo.title}</h4>
            <p>{blockTwo.description}</p>
          </div>
          <div className="pt-3 lg:pt-0 pr-10">
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoGrid;
