import React from 'react';

const Button = ({ children }) => {
  return (
    <div>
      <button className="border border-2 rounded-md whitespace-nowrap">
        <p className="p-1.5 font-bold uppercase">{children}</p>
      </button>
    </div>
  );
};

export default Button;
