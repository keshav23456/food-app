import { motion } from 'framer-motion';
import { Beef, Pizza, Salad, Coffee, Cake, Wrench as French } from 'lucide-react';
import { Category as CategoryType } from '../../types';

interface CategoryFilterProps {
  categories: CategoryType[];
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoryFilterProps) => {
  // Map category icons to Lucide components
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'beef':
        return <Beef size={20} />;
      case 'pizza':
        return <Pizza size={20} />;
      case 'salad':
        return <Salad size={20} />;
      case 'coffee':
        return <Coffee size={20} />;
      case 'cake':
        return <Cake size={20} />;
      case 'french-fries':
        return <French size={20} />;
      default:
        return <Beef size={20} />;
    }
  };

  return (
    <div className="overflow-x-auto py-2">
      <div className="flex space-x-2 min-w-max">
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(null)}
          className={`flex items-center justify-center px-4 py-2 rounded-full transition-colors ${
            activeCategory === null
              ? 'bg-primary-500 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          All
        </motion.button>
        
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center justify-center px-4 py-2 rounded-full transition-colors ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <span className="mr-2">{getCategoryIcon(category.icon)}</span>
            {category.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;