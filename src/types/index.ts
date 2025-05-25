export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  popular?: boolean;
  rating?: number;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Banner {
  id: number;
  title: string;
  description: string;
  image: string;
  cta: string;
  link: string;
}

export interface DeliveryInfo {
  fullName: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  notes?: string;
  paymentMethod: 'card' | 'cash';
}