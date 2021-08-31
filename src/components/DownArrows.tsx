import React from 'react';

const DownArrows = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-32 w-32 absolute bottom-16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
      />
    </svg>
  );
};

export default DownArrows;
