import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Menu from '../menu/Menu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <div className="body">
        <main className="main">{children}</main>
        <Footer />
      </div>
      <Menu />
    </div>
  );
};

export default Layout;
