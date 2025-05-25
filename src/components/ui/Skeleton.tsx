interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
  circle?: boolean;
}

const Skeleton = ({
  className = '',
  height = 'h-4',
  width = 'w-full',
  rounded = true,
  circle = false,
}: SkeletonProps) => {
  const baseClasses = 'bg-slate-200 dark:bg-slate-700 animate-pulse-slow';
  
  const roundedClass = rounded ? 'rounded-md' : '';
  const circleClass = circle ? 'rounded-full' : '';
  
  return (
    <div
      className={`
        ${baseClasses}
        ${height}
        ${width}
        ${circle ? circleClass : roundedClass}
        ${className}
      `}
    />
  );
};

export default Skeleton;