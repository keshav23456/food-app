import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import PromoBanner from '../components/home/PromoBanner';
import FoodCard from '../components/food/FoodCard';
import Button from '../components/ui/Button';
import Skeleton from '../components/ui/Skeleton';
import Card from '../components/ui/Card';

import { FoodItem, Banner, Category } from '../types';
import { fetchBanners, fetchFeaturedItems, fetchPopularItems, fetchCategories } from '../data/mockData';

const Home = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [featuredItems, setFeaturedItems] = useState<FoodItem[]>([]);
  const [popularItems, setPopularItems] = useState<FoodItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState({
    banners: true,
    featuredItems: true,
    popularItems: true,
    categories: true
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch banners
        fetchBanners().then(data => {
          setBanners(data);
          setLoading(prev => ({ ...prev, banners: false }));
        });

        // Fetch featured items
        fetchFeaturedItems().then(data => {
          setFeaturedItems(data);
          setLoading(prev => ({ ...prev, featuredItems: false }));
        });

        // Fetch popular items
        fetchPopularItems().then(data => {
          setPopularItems(data);
          setLoading(prev => ({ ...prev, popularItems: false }));
        });

        // Fetch categories
        fetchCategories().then(data => {
          setCategories(data);
          setLoading(prev => ({ ...prev, categories: false }));
        });
      } catch (error) {
        console.error('Error loading home data:', error);
        setLoading({
          banners: false,
          featuredItems: false,
          popularItems: false,
          categories: false
        });
      }
    };

    loadData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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
    >
      <section className="container-custom py-6">
        {loading.banners ? (
          <Skeleton height="h-64 md:h-96" rounded className="mb-12" />
        ) : (
          <PromoBanner banners={banners} />
        )}
      </section>

      <section className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Categories</h2>
          <Link 
            to="/menu" 
            className="text-primary-500 hover:text-primary-600 font-medium flex items-center"
          >
            View All <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        {loading.categories ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array(6).fill(0).map((_, i) => (
              <Skeleton key={i} height="h-20" rounded />
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Link to={`/menu?category=${category.id}`}>
                  <Card className="p-4 flex flex-col items-center justify-center text-center h-24 hover:border-primary-500 hover:border-2 transition-all">
                    <h3 className="font-medium text-lg">{category.name}</h3>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      <section className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Items</h2>
          <Link 
            to="/menu" 
            className="text-primary-500 hover:text-primary-600 font-medium flex items-center"
          >
            View All <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        {loading.featuredItems ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {renderSkeletons(4)}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {featuredItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <FoodCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      <section className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Popular Choices</h2>
          <Link 
            to="/menu" 
            className="text-primary-500 hover:text-primary-600 font-medium flex items-center"
          >
            View All <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        {loading.popularItems ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {renderSkeletons(4)}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {popularItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <FoodCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      <section className="bg-primary-50 dark:bg-slate-800/50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Browse our full menu and place your order now for fast delivery or pickup.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/menu'}
            >
              Explore Full Menu
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;