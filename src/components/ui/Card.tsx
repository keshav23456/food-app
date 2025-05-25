import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  className?: string;
  children: ReactNode;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const Card = ({
  className = '',
  children,
  hoverEffect = false,
  onClick,
}: CardProps) => {
  const baseClasses = 'bg-white dark:bg-slate-800 rounded-lg shadow transition-all duration-200';
  const hoverClasses = hoverEffect ? 'hover:shadow-md transform hover:-translate-y-1' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hoverEffect ? { y: -5 } : {}}
      className={`
        ${baseClasses}
        ${hoverClasses}
        ${clickableClasses}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;