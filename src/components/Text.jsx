import React from "react";

const Text = ({ children, type }) => {
  return <p className={`${type}`}>{children}</p>;
};

export default Text;
