import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-primary-light dark:bg-primary-dark text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ShopEase
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/products" className="hover:underline">Products</Link>
          <Link to="/upload-product" className="hover:underline">Upload Product</Link>
          <Link to="/about-us" className="hover:underline">About</Link>
          <Link to="/contact-us" className="hover:underline">Contact</Link>
          <Link to="/admin/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
          <Link to="/services" className='hover:underline'>Services</Link>
        </nav>
        
        <div className="flex items-center space-x-6">
          <ThemeToggle />
          
          <Link to="/cart" className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-primary-light dark:bg-primary-dark`}>
        <nav className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          <Link 
            to="/" 
            className="py-2 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
             to="/products" 
             className="py-2 hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
          >
         Products
        </Link>
    <Link 
      to="/upload-product" 
     className="py-2 hover:underline"
      onClick={() => setIsMobileMenuOpen(false)}
      >
      Upload Product
       </Link>
          <Link 
            to="/about-us" 
            className="py-2 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact-us" 
            className="py-2 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/services" 
            className="py-2 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/admin/dashboard" 
            className="py-2 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link 
            to="/admin" 
            className="py-2 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          > 
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;