import React from 'react';

const FourGrid = () => {
  return (
    <div className="grid gap-y-10 lg:gap-y-0 p-[7vw]">
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-0 items-center">
        <div className="space-y-4 lg:pr-20 max-w-[500px] justify-self-center lg:justify-self-end">
          <h3 className="text-2xl sm:text-4xl font-semibold">
            Nuclear vexatum iaceres crescere!
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis, doloribus. Ipsum saepe dicta excepturi vero sint dolorum
            quo ullam qui possimus inventore nesciunt incidunt, cum vel modi
            nostrum tempore. Commodi consectetur reiciendis veniam possimus
            corporis, distinctio officiis eos iste totam fuga, eum magnam
            adipisci accusantium.
          </p>
        </div>
        <div className=" ">
          <img
            src="/images/bass/agave-bass.jpg"
            alt=""
            className="max-h-[1200px] object-contain"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-0 items-center">
        <div className=" order-last lg:order-first flex justify-end">
          <img
            src="/images/bass/pink.jpg"
            alt=""
            className="max-h-[1200px] object-contain"
          />
        </div>
        <div className="space-y-4 lg:pl-20 max-w-[500px] justify-self-center lg:justify-self-start">
          <h3 className="text-2xl sm:text-4xl font-semibold">Vae.</h3>
          <p className="text-lg ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis, doloribus. Ipsum saepe dicta excepturi vero sint dolorum
            quo ullam qui possimus inventore nesciunt incidunt, cum vel modi
            nostrum tempore. Commodi consectetur reiciendis veniam possimus
            corporis, distinctio officiis eos iste totam fuga, eum magnam
            adipisci accusantium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourGrid;
