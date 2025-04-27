import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  useParams();
  const { addToCart } = useCart();
  
  // In a real app, you would fetch the product by ID from an API
  const product = {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life. These headphones feature advanced noise cancellation technology, crystal-clear audio, and a comfortable over-ear design perfect for long listening sessions.',
    price: 199.99,
    image: 'https://via.placeholder.com/600',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
      'Foldable design'
    ],
    rating: 4.5
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            {product.name}
          </h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none stroke-current'}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 dark:text-gray-300">
              {product.rating} ({Math.floor(product.rating * 20)} reviews)
            </span>
          </div>
          
          <p className="text-xl font-bold text-primary-light dark:text-primary-dark mb-6">
            ${product.price.toFixed(2)}
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {product.description}
          </p>
          
          <ul className="mb-6 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-primary-light dark:bg-primary-dark text-white py-3 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-900 transition-colors font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;