import Cart from '../components/Cart';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Shopping Cart</h1>
          <Link 
            to="/" 
            className="text-primary-light dark:text-primary-dark hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
        
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;