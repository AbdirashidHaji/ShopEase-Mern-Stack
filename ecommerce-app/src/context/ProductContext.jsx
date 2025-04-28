import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    // In a real app, this would call your API
    const productWithId = {
      ...newProduct,
      id: Date.now(), // Temporary ID
      rating: 4, // Default rating
      reviews: 0 // Default reviews
    };
    
    setProducts(prev => [...prev, productWithId]);
    return productWithId;
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);