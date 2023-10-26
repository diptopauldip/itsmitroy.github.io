import React from "react";

const MarginBottom = ({ children, amount }) => {
  const containerStyle = {
    marginBottom: amount,
  };

  return <div style={containerStyle}>{children}</div>;
};

export default MarginBottom;
