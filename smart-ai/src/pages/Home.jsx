import React from "react";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Launch Your Smart E-Commerce Shop with AI
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          AI-driven product generation, pricing optimization, and customer targeting in seconds.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/sign-up"
            className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            Get Started Free
          </a>
          <a
            href="/pricing"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg"
          >
            View Pricing
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 text-center mb-16">
        {[
          {
            title: "AI Product Generator",
            desc: "Create winning product descriptions & images instantly.",
          },
          {
            title: "Smart Dashboard",
            desc: "Manage your digital store, users, and orders seamlessly.",
          },
          {
            title: "M-Pesa & Global Payments",
            desc: "Accept payments locally and internationally with ease.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center bg-blue-50 dark:bg-blue-900 py-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Start Selling Smarter Today</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Join hundreds of digital creators launching AI-powered e-shops.
        </p>
        <a
          href="/sign-up"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Create Your Store
        </a>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;