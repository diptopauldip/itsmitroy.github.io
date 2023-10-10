import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar></Navbar>
      <div className='content'>{children}</div>
      {/* <footer>
        <p>Copywrite 2023 Dipto Dip</p>
      </footer> */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
