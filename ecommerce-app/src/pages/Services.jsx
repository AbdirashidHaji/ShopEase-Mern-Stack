const Services = () => {
    const services = [
      {
        title: "Fast Shipping",
        description: "We offer fast and reliable shipping options to get your products to you as quickly as possible.",
        icon: (
          <svg className="w-10 h-10 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        )
      },
      {
        title: "Easy Returns",
        description: "Not satisfied? Our hassle-free return policy makes it easy to return products within 30 days.",
        icon: (
          <svg className="w-10 h-10 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        )
      },
      {
        title: "24/7 Support",
        description: "Our customer support team is available around the clock to assist you with any questions or issues.",
        icon: (
          <svg className="w-10 h-10 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      },
      {
        title: "Secure Payments",
        description: "Your payment information is processed securely using the latest encryption technology.",
        icon: (
          <svg className="w-10 h-10 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      },
      {
        title: "Product Guarantee",
        description: "All our products come with a manufacturer's warranty and our satisfaction guarantee.",
        icon: (
          <svg className="w-10 h-10 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: "Personal Shopping",
        description: "Need help finding the right product? Our personal shopping assistants are here to help.",
        icon: (
          <svg className="w-10 h-10 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        )
      }
    ];
  
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Services</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're committed to providing exceptional services that enhance your shopping experience from start to finish.
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Customer-Centric Approach</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We put our customers at the heart of everything we do. From product selection to after-sales support, your satisfaction is our top priority.
              </p>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every product in our store goes through rigorous quality checks to ensure you receive only the best.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Competitive Pricing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We work directly with manufacturers to bring you high-quality products at the most competitive prices.
              </p>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to sustainable practices, from eco-friendly packaging to supporting ethical manufacturers.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;