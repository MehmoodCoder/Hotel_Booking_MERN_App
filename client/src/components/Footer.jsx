import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 border-t border-gray-800 px-6 md:px-16 lg:px-24 xl:px-32 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
        <div className="lg:col-span-2 space-y-4">
          <img src={logo} alt="Company Logo" className="h-8 w-auto" />
          <p className="text-xs md:text-sm text-gray-400 font-light max-w-sm leading-relaxed">
            Discover the world's most extraordinary places to stay, from
            boutique hotels to luxury villas and private resorts.
          </p>
          <div className="flex items-center gap-4 pt-2 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-white tracking-widest uppercase">
            Company
          </h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-white tracking-widest uppercase">
            Support
          </h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Safety Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Cancellation Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Accessibility
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-white tracking-widest uppercase">
            Stay Updated
          </h4>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Subscribe to our newsletter for travel inspiration and special
            offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center pt-1"
          >
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full px-3 py-2 text-xs bg-gray-900 border border-gray-800 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
            />
            <button
              type="submit"
              className="px-3.5 py-2 text-xs font-medium text-black bg-white rounded-r-lg hover:bg-gray-200 transition-colors shrink-0 cursor-pointer"
            >
              &rarr;
            </button>
          </form>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p>© 2026 QuickStay. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
