import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
      <Link to={`/products/${product.id}`} className="flex-grow">
        <div className="relative pb-2/3 h-48">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute h-full w-full object-cover"
          />
        </div>
        
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 hover:underline line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none stroke-current'}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              ({product.reviews})
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary-light dark:text-primary-dark">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-primary-light dark:bg-primary-dark text-white px-3 py-1 rounded hover:bg-blue-600 dark:hover:bg-blue-900 transition-colors text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;