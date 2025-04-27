import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/products/${product.id}`}>
        <div className="relative pb-2/3 h-48">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute h-full w-full object-cover"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 hover:underline">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          {product.description.substring(0, 60)}...
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary-light dark:text-primary-dark">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-primary-light dark:bg-primary-dark text-white px-3 py-1 rounded hover:bg-blue-600 dark:hover:bg-blue-900 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;