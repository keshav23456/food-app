import { motion } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';
import { FoodItem } from '../../types';
import { useCart } from '../../context/CartContext';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col" hoverEffect>
      <div className="relative overflow-hidden h-48 bg-slate-200 dark:bg-slate-700">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        {item.featured && (
          <span className="absolute top-2 left-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-md font-medium">
            Featured
          </span>
        )}
        {item.popular && (
          <span className="absolute top-2 right-2 bg-secondary-500 text-white text-xs px-2 py-1 rounded-md font-medium">
            Popular
          </span>
        )}
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.name}</h3>
          <span className="font-semibold text-primary-500">${item.price.toFixed(2)}</span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">
          {item.description}
        </p>

        {item.rating && (
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(item.rating || 0)
                      ? 'text-yellow-400'
                      : i < item.rating!
                      ? 'text-yellow-400'
                      : 'text-slate-300 dark:text-slate-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs ml-1 text-slate-600 dark:text-slate-400">
              {item.rating}
            </span>
          </div>
        )}

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            onClick={handleAddToCart}
            variant="primary"
            fullWidth
            leftIcon={<ShoppingCart size={16} />}
            rightIcon={<Plus size={16} />}
          >
            Add to Cart
          </Button>
        </motion.div>
      </div>
    </Card>
  );
};

export default FoodCard;