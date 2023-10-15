import React from "react";

const containerStyle = {
  maxWidth: "1800px",
  width: "90%",
  margin: "0 auto",
};

const Wrapper = ({ children }) => {
  return <div style={containerStyle}>{children}</div>;
};

export default Wrapper;
