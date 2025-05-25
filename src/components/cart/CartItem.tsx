import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { FoodItem } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: FoodItem & { quantity: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      handleRemove();
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    // Use setTimeout to allow animation to complete before removing
    setTimeout(() => {
      removeFromCart(item.id);
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 1, height: 'auto' }}
      animate={{
        opacity: isRemoving ? 0 : 1,
        height: isRemoving ? 0 : 'auto',
        marginBottom: isRemoving ? 0 : undefined,
      }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow mb-4"
    >
      <div className="w-20 h-20 rounded-md overflow-hidden bg-slate-200 dark:bg-slate-700 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow min-w-0">
        <h3 className="font-semibold text-slate-900 dark:text-white truncate">
          {item.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          ${item.price.toFixed(2)} each
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrement}
          className="p-1 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 focus-ring"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        
        <button
          onClick={handleIncrement}
          className="p-1 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 focus-ring"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="flex flex-col items-end gap-2">
        <span className="font-semibold text-primary-500">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        
        <button
          onClick={handleRemove}
          className="text-slate-400 hover:text-error-500 focus-ring p-1"
          aria-label="Remove item"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default CartItem;