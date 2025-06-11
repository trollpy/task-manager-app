import React from 'react';
import { Heart, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              TaskManager
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              A modern, responsive task management application built with React, Vite, and Tailwind CSS.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">
              Features
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Task Management</li>
              <li>Dark/Light Mode</li>
              <li>API Integration</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:your@email.com"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {currentYear} TaskManager. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
              {/* Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind */}
              by Thompho Sheriff
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
