import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { navItems } from '@components/DesktopNav';

const container = {
  initial: { opacity: 0, x: '100%' },
  animate: {
    x: '0',
    opacity: 1,
    transition: {},
  },
  exit: { opacity: 0, x: '100%' },
};

const MobileNav = () => {
  const [toggleNav, setToggleNav] = React.useState(false);
  const [toggleHover, setToggleHover] = React.useState(null);
  return (
    <>
      <span className="absolute top-6 right-0 z-50">
        <Hamburger
          toggled={toggleNav}
          toggle={setToggleNav}
          color="#ffffff"
          size={26}
        />
      </span>

      <AnimatePresence>
        {toggleNav && (
          <motion.ul
            key="card"
            initial="initial"
            animate="animate"
            variants={container}
            exit="exit"
            className="bg-black h-screen w-screen absolute inset-0"
          >
            {navItems.map(({ id, item }, index) => (
              <motion.li
                key={id}
                className={` text-6xl text-white tracking-wider py-2 transition-all duration-1000 ease-in-out relative z-10`}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
