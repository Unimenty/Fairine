import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="max-w-[1440px] mx-auto bg-background min-h-screen border-x border-border shadow-2xl relative flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        {showFooter && <Footer />}
        <CartDrawer />
      </div>
    </div>
  );
};

export default Layout;
