import React from "react";

const Text = ({ children, weight, size, leading }) => {
  return (
    <p className={`font-[${weight}] text-[${size}] leading-[${leading}] flex items-center justify-center`}>
      {children}
    </p>
  );
};

export default Text;
