import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

import FoodCard from '../components/food/FoodCard';
import CategoryFilter from '../components/food/CategoryFilter';
import Card from '../components/ui/Card';
import Skeleton from '../components/ui/Skeleton';

import { FoodItem, Category } from '../types';
import { fetchFoodItems, fetchCategories } from '../data/mockData';

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch food items
        const items = await fetchFoodItems();
        setFoodItems(items);
        
        // Fetch categories
        const cats = await fetchCategories();
        setCategories(cats);
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading menu data:', error);
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Update URL when category changes
  useEffect(() => {
    if (activeCategory) {
      setSearchParams({ category: activeCategory });
    } else {
      setSearchParams({});
    }
  }, [activeCategory, setSearchParams]);

  // Handle category change from URL
  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  // Filter food items based on category and search query
  const filteredItems = foodItems.filter((item) => {
    const matchesCategory = activeCategory ? item.category === activeCategory : true;
    const matchesSearch = searchQuery
      ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const renderSkeletons = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Card key={i} className="p-4">
          <Skeleton height="h-48" className="mb-4" />
          <Skeleton height="h-6" width="w-3/4" className="mb-2" />
          <Skeleton height="h-4" className="mb-2" />
          <Skeleton height="h-4" width="w-5/6" className="mb-4" />
          <Skeleton height="h-10" />
        </Card>
      ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[calc(100vh-64px)]"
    >
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold mb-8">Our Menu</h1>
        
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for food..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-3 pl-10 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>
        
        {loading ? (
          <div className="mb-8">
            <Skeleton height="h-16" className="rounded-lg" />
          </div>
        ) : (
          <div className="mb-8">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={handleCategoryChange}
            />
          </div>
        )}
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {renderSkeletons(8)}
          </div>
        ) : filteredItems.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <FoodCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No items found</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Try changing your search or category filter
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory(null);
              }}
              className="text-primary-500 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Menu;