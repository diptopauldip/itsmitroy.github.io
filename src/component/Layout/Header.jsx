import React from "react";

const headerStyle = {
  /* These two are important to make the navbar sticky */
  position: "sticky",
  top: "0",
  background: "pink",
};

const Header = ({ children }) => {
  return <header style={headerStyle}>{children}</header>;
};

export default Header;
