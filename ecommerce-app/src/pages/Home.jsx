import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulated product data - in a real app, you would fetch from an API
        const mockProducts = [
          {
            id: 1,
            name: 'Wireless Headphones',
            description: 'Premium noise-cancelling wireless headphones with 30-hour battery life.',
            price: 199.99,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'electronics',
            rating: 4.5,
            reviews: 128
          },
          {
            id: 2,
            name: 'Smart Watch',
            description: 'Fitness tracker with heart rate monitor and GPS.',
            price: 149.99,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'electronics',
            rating: 4.2,
            reviews: 86
          },
          {
            id: 3,
            name: 'Running Shoes',
            description: 'Lightweight running shoes with cushioned soles for maximum comfort.',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'clothing',
            rating: 4.7,
            reviews: 215
          },
          {
            id: 4,
            name: 'Cotton T-Shirt',
            description: 'Soft 100% cotton t-shirt available in multiple colors.',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            category: 'clothing',
            rating: 4.3,
            reviews: 178
          },
          {
            id: 5,
            name: 'Blender',
            description: 'High-powered blender for smoothies, soups, and more.',
            price: 79.99,
            image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxlbmRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'home',
            rating: 4.1,
            reviews: 92
          },
          {
            id: 6,
            name: 'Coffee Maker',
            description: 'Programmable coffee maker with thermal carafe.',
            price: 59.99,
            image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'home',
            rating: 4.4,
            reviews: 156
          },
          {
            id: 7,
            name: 'Yoga Mat',
            description: 'Non-slip yoga mat with carrying strap.',
            price: 34.99,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'sports',
            rating: 4.6,
            reviews: 203
          },
          {
            id: 8,
            name: 'Dumbbell Set',
            description: 'Adjustable dumbbell set for home workouts.',
            price: 129.99,
            image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtYmVsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'sports',
            rating: 4.8,
            reviews: 187
          },
          {
            id: 9,
            name: 'Backpack',
            description: 'Durable backpack with laptop compartment.',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.5,
            reviews: 142
          },
          {
            id: 10,
            name: 'Sunglasses',
            description: 'UV protection sunglasses with polarized lenses.',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.2,
            reviews: 98
          },
          {
            id: 11,
            name: 'Wireless Earbuds',
            description: 'True wireless earbuds with 24-hour battery life.',
            price: 79.99,
            image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'electronics',
            rating: 4.3,
            reviews: 167
          },
          {
            id: 12,
            name: 'Desk Lamp',
            description: 'Adjustable LED desk lamp with multiple brightness levels.',
            price: 45.99,
            image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'home',
            rating: 4.4,
            reviews: 134
          },
          {
            id: 13,
            name: 'Desk Lamp',
            description: 'Adjustable LED desk lamp with multiple brightness levels.',
            price: 45.99,
            image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'home',
            rating: 4.4,
            reviews: 134
          },
          {
            id: 14,
            name: 'Yoga Mat',
            description: 'Non-slip yoga mat with carrying strap.',
            price: 34.99,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'sports',
            rating: 4.6,
            reviews: 203
          },
          {
            id: 15,
            name: 'Dumbbell Set',
            description: 'Adjustable dumbbell set for home workouts.',
            price: 129.99,
            image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtYmVsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'sports',
            rating: 4.8,
            reviews: 187
          },
          {
            id: 16,
            name: 'Backpack',
            description: 'Durable backpack with laptop compartment.',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.5,
            reviews: 142
          },
          {
            id: 17,
            name: 'Sunglasses',
            description: 'UV protection sunglasses with polarized lenses.',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.2,
            reviews: 98
          },
          {
            id: 18,
            name: 'Wireless Earbuds',
            description: 'True wireless earbuds with 24-hour battery life.',
            price: 79.99,
            image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'electronics',
            rating: 4.3,
            reviews: 167
          },
          {
            id: 19,
            name: 'Desk Lamp',
            description: 'Adjustable LED desk lamp with multiple brightness levels.',
            price: 45.99,
            image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'home',
            rating: 4.4,
            reviews: 134
          },
          {
            id: 20,
            name: 'Wireless Mouse',
            description: 'Ergonomic wireless mouse with customizable buttons.',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1581091870620-4f3b8a2c5d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'electronics',
            rating: 4.5,
            reviews: 112
          },
          {
            id: 21,
            name: 'Bluetooth Speaker',
            description: 'Portable Bluetooth speaker with deep bass and clear sound.',
            price: 59.99,
            image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'electronics',
            rating: 4.6,
            reviews: 145
          },
          {
            id: 22,
            name: 'Smartphone Case',
            description: 'Durable smartphone case with shock absorption technology.',
            price: 19.99, 
            image: 'https://images.unsplash.com/photo-1593642632823-9b5124d78c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.1,
            reviews: 78
          },
          {
            id: 23,
            name: 'Laptop Stand',
            description: 'Adjustable laptop stand for better ergonomics.',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1581091870620-4f3b8a2c5d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc3RhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.7,
            reviews: 89
          },
          {
            id: 24,
            name: 'Portable Charger',
            description: 'High-capacity portable charger for smartphones and tablets.',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1593642632823-9b5124d78c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGFibGUlMjBjaGFyZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.5,
            reviews: 112
          },
          {
            id: 25,
            name: 'Smartphone Tripod',
            description: 'Adjustable tripod for smartphones with remote shutter.',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1593642632823-9b5124d78c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjB0cmlwb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.4,
            reviews: 134
          },
          {
            id: 26,
            name: 'Wireless Charger',
            description: 'Fast wireless charger for smartphones and earbuds.',
            price: 19.99,
            image: 'https://images.unsplash.com/photo-1593642632823-9b5124d78c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBjaGFyZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.6,
            reviews: 145
          },
          {
            id: 27,
            name: 'Smartphone Gimbal',
            description: '3-axis gimbal stabilizer for smooth video recording.',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1593642632823-9b5124d78c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBnaW1ibGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.7,
            reviews: 203
          },
          {
            id: 28,
            name: 'Smartphone Lens Kit',
            description: 'Wide-angle and macro lens kit for smartphones.',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1593642632823-9b5124d78c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBsZW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.5,
            reviews: 112
          },
          {
            id: 29,
            name: 'Smartphone Car Mount',
            description: 'Adjustable car mount for smartphones with suction cup.',
            price: 19.99,
            image: 'https://images.unsplash.com/photo-1593642632823-9b5124d78c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBjYXIlMjBtY291bnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.4,
            reviews: 134
          },
          {
            id: 30,
            name: 'Smartphone Screen Protector',
            description: 'Tempered glass screen protector for smartphones.',
            price: 9.99,
            image: 'https://images.unsplash.com/photo-1593642632823-9b5124d78c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBzY3JlZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.5,
            reviews: 112
          },
          {
            id: 31,
            name: 'Smartphone Battery Case',
            description: 'Battery case for smartphones with extra power.',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1593642632823-9b5124d78c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBiYXR0ZXJ5JTIwY2FzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.6,
            reviews: 145
          },
          {
            id: 32,
            name: 'Smartphone Pop Socket',
            description: 'Pop socket for smartphones with grip and stand.',
            price: 9.99,
            image: 'https://images.unsplash.com/photo-1593642632823-9b5124d78c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBwb3AlMjBzb2NrZXQlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'accessories',
            rating: 4.5,
            reviews: 112
          }
        ];
        setProducts(mockProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'home', name: 'Home' },
    { id: 'sports', name: 'Sports' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Featured Products</h1>
      
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-light dark:bg-primary-dark text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-light dark:border-primary-dark"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;