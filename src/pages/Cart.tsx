import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, clearCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[calc(100vh-64px)]"
    >
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center">
            <ShoppingCart className="mr-2" size={28} />
            Your Cart
          </h1>
          {items.length > 0 && (
            <Button
              variant="outline"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          )}
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <CartItem item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ShoppingCart size={64} className="mx-auto text-slate-300 dark:text-slate-700 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                Looks like you haven't added any items to your cart yet. Start browsing our menu to find something delicious!
              </p>
              <Link to="/menu">
                <Button
                  variant="primary"
                  leftIcon={<ArrowLeft size={18} />}
                >
                  Browse Menu
                </Button>
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;