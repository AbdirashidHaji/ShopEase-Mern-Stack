import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminLayout from './components/admin/AdminLayout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import UploadProduct from './pages/UploadProduct';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
        <ProductProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col">
            <Header />
            
            <main className="flex-grow pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/upload-product" element={<UploadProduct />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<AdminLayout />}/>
              </Routes>
            </main>

            <Footer />
          </div>
          </ProductProvider>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
