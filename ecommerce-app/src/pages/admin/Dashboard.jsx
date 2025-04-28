import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats] = useState({
    totalSales: 12453,
    totalOrders: 342,
    totalProducts: 56,
    totalCustomers: 128
  });

  const recentOrders = [
    { id: 1, customer: 'John Doe', amount: 129.99, status: 'Shipped', date: '2023-06-15' },
    { id: 2, customer: 'Jane Smith', amount: 89.99, status: 'Processing', date: '2023-06-14' },
    { id: 3, customer: 'Robert Johnson', amount: 199.99, status: 'Delivered', date: '2023-06-12' },
    { id: 4, customer: 'Emily Davis', amount: 59.99, status: 'Shipped', date: '2023-06-11' },
    { id: 5, customer: 'Michael Wilson', amount: 149.99, status: 'Processing', date: '2023-06-10' }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Sales</h3>
          <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">${stats.totalSales.toLocaleString()}</p>
          <p className="text-green-500 text-sm mt-1">+12% from last month</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Orders</h3>
          <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">{stats.totalOrders}</p>
          <p className="text-green-500 text-sm mt-1">+8% from last month</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Products</h3>
          <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">{stats.totalProducts}</p>
          <p className="text-green-500 text-sm mt-1">+5 new this month</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Customers</h3>
          <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">{stats.totalCustomers}</p>
          <p className="text-green-500 text-sm mt-1">+24 new this month</p>
        </div>
      </div>
      
      {/* Recent Orders */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Orders</h2>
          <Link to="/admin/orders" className="text-primary-light dark:text-primary-dark hover:underline">View All</Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {recentOrders.map(order => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-300">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-300">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-300">${order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-300">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link to={`/admin/orders/${order.id}`} className="text-primary-light dark:text-primary-dark hover:text-blue-600 dark:hover:text-blue-400">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;