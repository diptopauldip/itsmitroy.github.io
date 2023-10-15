import React from "react";
import "./header.module.css";

// const headerStyle = {
//   "@media (min-width: 768px)": {
//     background: "lightblue",
//   },
//   position: "sticky",
//   top: "0",
//   background: "pink",
//   padding: ".5em 0",
//   textAlign: "center",
//   marginBottom: "2em",
// };

const Header = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;
