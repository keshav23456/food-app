import { FoodItem, Category, Banner } from '../types';

export const categories: Category[] = [
  {
    id: 'burgers',
    name: 'Burgers',
    icon: 'beef',
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    icon: 'pizza',
  },
  {
    id: 'salads',
    name: 'Salads',
    icon: 'salad',
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: 'coffee',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: 'cake',
  },
  {
    id: 'sides',
    name: 'Sides',
    icon: 'french-fries',
  }
];

export const banners: Banner[] = [
  {
    id: 1,
    title: 'Free Delivery on First Order',
    description: 'Use code WELCOME at checkout',
    image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cta: 'Order Now',
    link: '/menu'
  },
  {
    id: 2,
    title: 'Try Our New Smash Burger',
    description: 'Juicy, savory, and oh so delicious',
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cta: 'Try Now',
    link: '/menu?category=burgers'
  },
  {
    id: 3,
    title: 'Happy Hour Deals',
    description: '20% off on selected items from 2-5 PM',
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cta: 'View Menu',
    link: '/menu'
  }
];

export const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty with melted cheddar, fresh lettuce, tomatoes, and our special sauce',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burgers',
    featured: true,
    popular: true,
    rating: 4.8,
    tags: ['beef', 'cheese', 'classic']
  },
  {
    id: 2,
    name: 'Double Bacon Burger',
    description: 'Double beef patty with crispy bacon, caramelized onions, and BBQ sauce',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burgers',
    featured: true,
    rating: 4.9,
    tags: ['beef', 'bacon', 'bbq']
  },
  {
    id: 3,
    name: 'Veggie Burger',
    description: 'Plant-based patty with avocado, sprouts, and vegan mayo',
    price: 9.99,
    image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burgers',
    rating: 4.5,
    tags: ['vegetarian', 'vegan', 'healthy']
  },
  {
    id: 4,
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, fresh mozzarella, and basil',
    price: 11.99,
    image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pizzas',
    popular: true,
    rating: 4.7,
    tags: ['classic', 'vegetarian', 'cheese']
  },
  {
    id: 5,
    name: 'Pepperoni Pizza',
    description: 'Traditional pizza with tomato sauce, mozzarella, and pepperoni',
    price: 13.99,
    image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pizzas',
    featured: true,
    popular: true,
    rating: 4.8,
    tags: ['meat', 'classic', 'pepperoni']
  },
  {
    id: 6,
    name: 'BBQ Chicken Pizza',
    description: 'Tangy BBQ sauce, grilled chicken, red onions, and cilantro',
    price: 14.99,
    image: 'https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pizzas',
    rating: 4.6,
    tags: ['chicken', 'bbq', 'specialty']
  },
  {
    id: 7,
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing',
    price: 7.99,
    image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'salads',
    popular: true,
    rating: 4.4,
    tags: ['classic', 'vegetarian']
  },
  {
    id: 8,
    name: 'Greek Salad',
    description: 'Tomatoes, cucumbers, red onions, feta cheese, olives, and vinaigrette',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'salads',
    rating: 4.5,
    tags: ['vegetarian', 'healthy', 'mediterranean']
  },
  {
    id: 9,
    name: 'Cobb Salad',
    description: 'Mixed greens with grilled chicken, bacon, avocado, tomato, egg, and blue cheese',
    price: 10.99,
    image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'salads',
    rating: 4.6,
    tags: ['chicken', 'bacon', 'protein']
  },
  {
    id: 10,
    name: 'Iced Coffee',
    description: 'Cold-brewed coffee served over ice',
    price: 3.99,
    image: 'https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'drinks',
    rating: 4.3,
    tags: ['coffee', 'cold', 'refreshing']
  },
  {
    id: 11,
    name: 'Strawberry Smoothie',
    description: 'Fresh strawberries blended with yogurt and honey',
    price: 4.99,
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'drinks',
    featured: true,
    rating: 4.7,
    tags: ['fruit', 'smoothie', 'healthy']
  },
  {
    id: 12,
    name: 'Chocolate Milkshake',
    description: 'Rich chocolate ice cream blended with milk and topped with whipped cream',
    price: 5.99,
    image: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'drinks',
    popular: true,
    rating: 4.8,
    tags: ['dessert', 'chocolate', 'sweet']
  },
  {
    id: 13,
    name: 'Chocolate Cake',
    description: 'Moist chocolate cake with rich chocolate ganache',
    price: 6.99,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'desserts',
    popular: true,
    rating: 4.9,
    tags: ['chocolate', 'cake', 'sweet']
  },
  {
    id: 14,
    name: 'Cheesecake',
    description: 'Creamy cheesecake with a graham cracker crust and berry compote',
    price: 7.99,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'desserts',
    featured: true,
    rating: 4.8,
    tags: ['cheesecake', 'berries', 'sweet']
  },
  {
    id: 15,
    name: 'Apple Pie',
    description: 'Warm apple pie with a flaky crust, served with vanilla ice cream',
    price: 6.99,
    image: 'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'desserts',
    rating: 4.7,
    tags: ['pie', 'apple', 'classic']
  },
  {
    id: 16,
    name: 'French Fries',
    description: 'Crispy golden fries seasoned with sea salt',
    price: 3.99,
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'sides',
    popular: true,
    rating: 4.6,
    tags: ['potato', 'fried', 'classic']
  },
  {
    id: 17,
    name: 'Onion Rings',
    description: 'Beer-battered onion rings, deep-fried to perfection',
    price: 4.99,
    image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'sides',
    rating: 4.5,
    tags: ['onion', 'fried', 'appetizer']
  },
  {
    id: 18,
    name: 'Mozzarella Sticks',
    description: 'Breaded mozzarella sticks with marinara dipping sauce',
    price: 5.99,
    image: 'https://images.pexels.com/photos/15074039/pexels-photo-15074039/free-photo-of-fried-mozzarella-sticks-with-sauce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'sides',
    rating: 4.7,
    tags: ['cheese', 'fried', 'appetizer']
  }
];

// Simulate API fetch delay
export const fetchFoodItems = () => {
  return new Promise<FoodItem[]>((resolve) => {
    setTimeout(() => {
      resolve(foodItems);
    }, 800);
  });
};

export const fetchCategories = () => {
  return new Promise<Category[]>((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 500);
  });
};

export const fetchBanners = () => {
  return new Promise<Banner[]>((resolve) => {
    setTimeout(() => {
      resolve(banners);
    }, 600);
  });
};

export const fetchFeaturedItems = () => {
  return new Promise<FoodItem[]>((resolve) => {
    setTimeout(() => {
      resolve(foodItems.filter(item => item.featured));
    }, 700);
  });
};

export const fetchPopularItems = () => {
  return new Promise<FoodItem[]>((resolve) => {
    setTimeout(() => {
      resolve(foodItems.filter(item => item.popular));
    }, 700);
  });
};

export const fetchItemsByCategory = (category: string) => {
  return new Promise<FoodItem[]>((resolve) => {
    setTimeout(() => {
      resolve(foodItems.filter(item => item.category === category));
    }, 600);
  });
};