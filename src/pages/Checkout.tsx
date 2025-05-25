import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, CreditCard, Wallet, ArrowLeft, Truck } from 'lucide-react';

import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import CartItem from '../components/cart/CartItem';
import { DeliveryInfo } from '../types';

const Checkout = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<DeliveryInfo>({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    email: '',
    notes: '',
    paymentMethod: 'card'
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof DeliveryInfo, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  
  const tax = totalPrice * 0.08;
  const deliveryFee = totalPrice > 0 ? 2.99 : 0;
  const grandTotal = totalPrice + tax + deliveryFee;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof DeliveryInfo]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handlePaymentMethodChange = (method: 'card' | 'cash') => {
    setFormData(prev => ({ ...prev, paymentMethod: method }));
  };
  
  const validateForm = () => {
    const newErrors: Partial<Record<keyof DeliveryInfo, string>> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      navigate('/cart');
      return;
    }
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOrderPlaced(true);
      
      // Clear cart after successful order
      setTimeout(() => {
        clearCart();
      }, 1000);
    }, 2000);
  };
  
  if (isOrderPlaced) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container-custom py-16 min-h-[calc(100vh-64px)]"
      >
        <div className="max-w-md mx-auto text-center">
          <div className="mx-auto w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mb-6">
            <Check size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Placed!</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Your order has been successfully placed. You will receive a confirmation email shortly.
          </p>
          <Button
            variant="primary"
            onClick={() => navigate('/')}
          >
            Return to Home
          </Button>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[calc(100vh-64px)]"
    >
      <div className="container-custom py-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/cart')}
            className="mr-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Back to cart"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow mb-8">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <Truck className="mr-2 text-primary-500" size={20} />
                  Delivery Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:border-slate-600 ${
                        errors.fullName ? 'border-error-500' : 'border-slate-300 dark:border-slate-600'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-error-500">{errors.fullName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:border-slate-600 ${
                        errors.email ? 'border-error-500' : 'border-slate-300 dark:border-slate-600'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error-500">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:border-slate-600 ${
                        errors.phone ? 'border-error-500' : 'border-slate-300 dark:border-slate-600'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-error-500">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Address *
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:border-slate-600 ${
                        errors.address ? 'border-error-500' : 'border-slate-300 dark:border-slate-600'
                      }`}
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-error-500">{errors.address}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      City *
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:border-slate-600 ${
                        errors.city ? 'border-error-500' : 'border-slate-300 dark:border-slate-600'
                      }`}
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-error-500">{errors.city}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Zip Code *
                    </label>
                    <input
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:border-slate-600 ${
                        errors.zipCode ? 'border-error-500' : 'border-slate-300 dark:border-slate-600'
                      }`}
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-sm text-error-500">{errors.zipCode}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="notes" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Delivery Notes (optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Special instructions for delivery"
                    className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700"
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Payment Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className={`border rounded-md p-4 cursor-pointer transition-colors ${
                        formData.paymentMethod === 'card'
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-slate-300 dark:border-slate-600'
                      }`}
                      onClick={() => handlePaymentMethodChange('card')}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                          formData.paymentMethod === 'card'
                            ? 'border-primary-500'
                            : 'border-slate-400'
                        }`}>
                          {formData.paymentMethod === 'card' && (
                            <div className="w-3 h-3 rounded-full bg-primary-500" />
                          )}
                        </div>
                        <CreditCard size={20} className="mr-2" />
                        <span className="font-medium">Credit Card</span>
                      </div>
                    </div>
                    
                    <div
                      className={`border rounded-md p-4 cursor-pointer transition-colors ${
                        formData.paymentMethod === 'cash'
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-slate-300 dark:border-slate-600'
                      }`}
                      onClick={() => handlePaymentMethodChange('cash')}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                          formData.paymentMethod === 'cash'
                            ? 'border-primary-500'
                            : 'border-slate-400'
                        }`}>
                          {formData.paymentMethod === 'cash' && (
                            <div className="w-3 h-3 rounded-full bg-primary-500" />
                          )}
                        </div>
                        <Wallet size={20} className="mr-2" />
                        <span className="font-medium">Cash on Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="max-h-80 overflow-y-auto mb-6">
                  {items.map(item => (
                    <div key={item.id} className="py-2">
                      <div className="flex justify-between">
                        <div>
                          <span className="font-medium">{item.quantity}x </span>
                          <span>{item.name}</span>
                        </div>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Subtotal ({totalItems} items)</span>
                    <span className="font-medium">${totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Tax (8%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Delivery Fee</span>
                    <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-3 flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary-500">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button
                  variant="primary"
                  fullWidth
                  type="submit"
                  onClick={handleSubmit}
                  isLoading={isSubmitting}
                >
                  Place Order
                </Button>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
              Add some items to your cart before proceeding to checkout.
            </p>
            <Button
              variant="primary"
              onClick={() => navigate('/menu')}
            >
              Browse Menu
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Checkout;