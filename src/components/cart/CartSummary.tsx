import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const CartSummary = () => {
  const { totalItems, totalPrice, items } = useCart();
  const navigate = useNavigate();
  
  const tax = useMemo(() => totalPrice * 0.08, [totalPrice]);
  const deliveryFee = totalPrice > 0 ? 2.99 : 0;
  const grandTotal = totalPrice + tax + deliveryFee;
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow sticky top-24"
    >
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <ShoppingBag className="mr-2 text-primary-500" size={20} />
        Order Summary
      </h2>
      
      {items.length > 0 ? (
        <>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Subtotal ({totalItems} items)</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Tax (8%)</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Delivery Fee</span>
              <span className="font-medium">${deliveryFee.toFixed(2)}</span>
            </div>
            
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold text-primary-500">${grandTotal.toFixed(2)}</span>
            </div>
          </div>
          
          <Button
            variant="primary"
            fullWidth
            rightIcon={<ArrowRight size={18} />}
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
          
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
            By proceeding, you agree to our Terms of Service and Privacy Policy.
          </p>
        </>
      ) : (
        <div className="text-center py-6">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Your cart is empty
          </p>
          <Button
            variant="primary"
            onClick={() => navigate('/menu')}
          >
            Browse Menu
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default CartSummary;