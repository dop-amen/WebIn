import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`px-3 sm:px-4 py-1.5 sm:py-2 border-2 text-base sm:text-[20px] border-black text-black hover:text-white hover:bg-black duration-75 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
