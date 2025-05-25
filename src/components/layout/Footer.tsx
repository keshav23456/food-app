import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold text-white mb-4">Tasty Bites</h2>
            <p className="mb-4 text-slate-400">
              Delivering delicious food to your doorstep. Fast, fresh, and flavorful.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-primary-500 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-primary-500 transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/menu?category=burgers"
                  className="hover:text-primary-500 transition-colors"
                >
                  Burgers
                </Link>
              </li>
              <li>
                <Link
                  to="/menu?category=pizzas"
                  className="hover:text-primary-500 transition-colors"
                >
                  Pizzas
                </Link>
              </li>
              <li>
                <Link
                  to="/menu?category=salads"
                  className="hover:text-primary-500 transition-colors"
                >
                  Salads
                </Link>
              </li>
              <li>
                <Link
                  to="/menu?category=drinks"
                  className="hover:text-primary-500 transition-colors"
                >
                  Drinks
                </Link>
              </li>
              <li>
                <Link
                  to="/menu?category=desserts"
                  className="hover:text-primary-500 transition-colors"
                >
                  Desserts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary-500" />
                <span>Abc Street, delhi City, TS 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-500" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-500" />
                <span>hello@tastybites.example</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Tasty Bites. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-slate-400 hover:text-primary-500">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-400 hover:text-primary-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;