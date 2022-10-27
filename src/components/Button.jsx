import React from "react";
import Text from "./Text";

const Button = ({ children }) => {
  return (
    <button className="bg-[#546BA6] py-4 w-full rounded-[10px] shadow-sm text-white">
      <Text weight={400} size={"16px"} leading={"20px"}>
        {children}
      </Text>
    </button>
  );
};

export default Button;
