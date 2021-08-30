import React from 'react';

const NavItems = [
  { id: 0, item: 'Standard', route: '/standard' },
  { id: 1, item: 'Agave', route: '/agave' },
  { id: 2, item: 'Continua', route: '/continua' },
  { id: 3, item: 'Bass', route: '/bass' },
];

const Navigation = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className=" w-full absolute top-0 z-10 h-[30vh] bg-gradient-to-b from-black to-transparent" />
      <nav className="min-content mx-auto text-center relative z-50">
        <div className="text-white pt-8 pb-12">
          <a href="/">
            <h3 className="uppercase text-[24px]">
              Para
              <span className="text-red">g</span>
              ram
            </h3>
          </a>
        </div>
        <ul className="flex justify-evenly">
          {NavItems.map(({ id, item, route }) => (
            <li key={id}>
              <a href={route}>
                <p className="text-white uppercase">{item}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
