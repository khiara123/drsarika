import React from 'react';
import Header from '../modules/Header/Header';
import TopHeader from './Header/TopHeader';
import Footer from './Footer';
import BottomFooter from './BottomFooter';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <TopHeader/>
      <Header />
        <Outlet /> {/* Route content will be injected here */}
      <Footer />
      <BottomFooter />
    </>
  );
};

export default Layout;