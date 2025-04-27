import {
    EnvelopeIcon,
    GlobeAltIcon
  } from "@heroicons/react/24/outline";
  import {
    TwitterIcon,
    GithubIcon,
    FacebookIcon
  } from "lucide-react"; // optional extra icons
  
  const Footer = () => {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
          
          <p className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} SmartShop AI. All rights reserved.
          </p>
  
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/yourrepo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-white transition"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:support@smartshopai.com"
              className="hover:text-green-600 transition"
            >
              <EnvelopeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;