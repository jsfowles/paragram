import React from 'react';
import data from 'public/data/data.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from './Button';

SwiperCore.use([Navigation]);

const PopupModal = ({ title }) => {
  const instrument = data.filter((item) => item.title === title);
  return (
    <div className="">
      {instrument.map(({ id, title, description, features, images, route }) => (
        <div className="flex flex-col lg:flex-row">
          <Swiper keyboard loop navigation className="lg:w-1/2">
            {images.map((img) => (
              <SwiperSlide>
                <figure>
                  <img
                    className="w-full object-contain md:object-cover"
                    src={img}
                    alt={title}
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <section className="w-full lg:w-1/2 flex flex-col justify-evenly mx-6">
            <h2 className="text-xl font-semibold uppercase text-heading">
              {title}
            </h2>
            <p>{description}</p>
            <ul>
              {features.map((f) => (
                <li className="font-semibold">
                  <span className="text-red pr-3">+</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex ml-2">
              <Button href={route}>Learn More</Button>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default PopupModal;
