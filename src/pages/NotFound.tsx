import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-64px)] flex items-center justify-center"
    >
      <div className="container-custom py-16 text-center">
        <h1 className="text-8xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button variant="primary" leftIcon={<Home size={18} />}>
            Back to Home
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;