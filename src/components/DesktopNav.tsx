import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import Social from '@components/Social';

export const navItems = [
  {
    id: 0,
    item: 'Instruments',
    items: [
      { title: 'agave', route: '/agave' },
      { title: 'standard', route: '/standard' },
      { title: 'continua', route: '/continua' },
      { title: 'bass', route: '/bass' },
    ],
  },
  { id: 1, item: 'About', route: '/about' },
  { id: 2, item: 'Contact', route: '/contact' },
];

const MobileNav = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <ul className="hidden md:flex justify-evenly items-center">
      {navItems.map(({ id, item, route }) => (
        <motion.li
          key={id}
          className="relative"
          onHoverStart={() => {
            item === 'Instruments' && setHover(true);
          }}
          onHoverEnd={() => {
            item === 'Instruments' && setHover(false);
          }}
        >
          {route ? (
            <Link href={route} passHref>
              <a>
                <motion.p className="text-white uppercase">{item}</motion.p>
              </a>
            </Link>
          ) : (
            <motion.p className="text-white uppercase">{item}</motion.p>
          )}
          {hover && item === 'Instruments' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/40 text-white lowercase px-10 py-5 rounded-md shadow-2xl absolute z-50  transform -translate-x-10"
            >
              {navItems[0].items.map(({ title, route }) => (
                <Link key={title} href={route} passHref>
                  <a>
                    <p className="uppercase py-1">{title}</p>
                  </a>
                </Link>
              ))}
            </motion.div>
          )}
        </motion.li>
      ))}
      <Social />
    </ul>
  );
};

export default MobileNav;
