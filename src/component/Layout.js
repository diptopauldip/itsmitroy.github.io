import React from "react";
// import ToggleMenuMFTest from "./Old/ToggleMenuMobileFirst";
import "../styles/global.css";
import Footer from "./Footer";
// import ToggleMenuMobileFirstComplete from "./Old/NavigationBar";
import NavigationBar from "./NavigationBar";
import Navbar from "./Layout/Navbar";
import Wrapper from "./Common/Wrapper";
import Header from "./Layout/Header";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header>
        <Wrapper>
          <Navbar></Navbar>
        </Wrapper>
      </Header>
      <div className='content'>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
