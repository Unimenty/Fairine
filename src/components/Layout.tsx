import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
      <CartDrawer />
    </div>
  );
};

export default Layout;
