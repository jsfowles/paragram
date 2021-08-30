import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button className="button border border-2 rounded-md whitespace-nowrap mr-4">
      <a href={props.href}>
        <p className="p-1.5 font-bold uppercase">{children}</p>
      </a>
    </button>
  );
};

export default Button;
