import React from "react";
// import ToggleMenuMFTest from "./Old/ToggleMenuMobileFirst";
import "../styles/global.css";
// import ToggleMenuMobileFirstComplete from "./Old/NavigationBar";
// import Navbar from "./Layout/Navbar";
// import Wrapper from "./Common/Wrapper";
import Header from "./Layout/Header";
import NavigationBar from "./Layout/NavigationBar";
import Footer from "./Layout/Footer";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header>
        <NavigationBar></NavigationBar>
      </Header>
      <div className='content'>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
