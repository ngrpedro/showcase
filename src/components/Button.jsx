import React from "react";
import Text from "./Text";

const Button = ({ children, type }) => {
  return (
    <button className={`${type}`}>
      <Text type='text-type-sm'>
        {children}
      </Text>
    </button>
  );
};

export default Button;
