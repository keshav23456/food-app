import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();
  
  useEffect(() => {
    // Update page title based on the current route
    const pathname = location.pathname;
    let title = 'Tasty Bites Delivery';
    
    if (pathname === '/') {
      title = 'Tasty Bites - Food Delivery';
    } else if (pathname === '/menu') {
      title = 'Our Menu | Tasty Bites';
    } else if (pathname === '/cart') {
      title = 'Your Cart | Tasty Bites';
    } else if (pathname === '/checkout') {
      title = 'Checkout | Tasty Bites';
    }
    
    document.title = title;
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;