import React from 'react';

interface Props {
  image: string;
}

const Configuration = ({ image }: Props) => {
  return (
    <div className="flex justify-center py-24">
      <div className="">
        <img
          src={image}
          className="object-contain object-center"
          alt="Person typing on a laptop keyboard"
        />
      </div>
    </div>
  );
};

export default Configuration;
