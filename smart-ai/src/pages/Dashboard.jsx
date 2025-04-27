import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = ({ active, setActive }) => {
  const links = [
    { name: "Overview", icon: <LayoutDashboard />, id: "dashboard" },
    { name: "Orders", icon: <ShoppingCart />, id: "orders" },
    { name: "Settings", icon: <Settings />, id: "settings" },
  ];

  return (
    <aside className="w-64 h-full bg-white dark:bg-gray-900 border-r dark:border-gray-700 hidden sm:block">
      <div className="p-6 text-xl font-bold">SmartShop AI</div>
      <nav className="flex flex-col gap-2 px-4">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => setActive(link.id)}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
              active === link.id
                ? "bg-blue-600 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {link.icon}
            {link.name}
          </button>
        ))}
        <button className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-red-500 hover:bg-red-100 dark:hover:bg-red-900 mt-6">
          <LogOut />
          Logout
        </button>
      </nav>
    </aside>
  );
};

const Dashboard = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar active={active} setActive={setActive} />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-gray-950">
        <h1 className="text-2xl font-bold mb-4 capitalize">{active}</h1>
        <div className="p-4 border rounded-xl bg-white dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300">
            This is your <strong>{active}</strong> content area.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;