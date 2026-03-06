"use client";

import Link from "next/link";
import { Leaf, ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-earth-600 text-rice-50 pt-20 pb-10 border-t-4 border-mango-500">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-mango-500" />
              <span className="font-serif text-3xl font-bold tracking-tight text-white">Vriksa</span>
            </Link>
            <p className="text-earth-200 text-sm leading-relaxed mb-6">
              Cultivating purity and wellness through natural organic mangoes and premium heritage rice varieties. From our farms to your table.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-earth-500 flex items-center justify-center hover:bg-mango-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-earth-500 flex items-center justify-center hover:bg-mango-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-earth-500 flex items-center justify-center hover:bg-mango-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-mango-100">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Shop All', 'Organic Mangoes', 'Heritage Rice', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-earth-200 hover:text-mango-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-mango-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-mango-100">Customer Care</h4>
            <ul className="flex flex-col gap-3">
              {['FAQ', 'Shipping Policy', 'Returns', 'Track Order', 'Health Guidelines'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-earth-200 hover:text-mango-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-mango-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="font-serif text-xl mb-6 text-mango-100">Fresh Harvest Alerts</h4>
            <p className="text-earth-200 text-sm mb-4">
              Subscribe to get notified about fresh seasonal arrivals, exclusive offers, and organic health tips.
            </p>
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-earth-500/50 border border-earth-400 text-white px-4 py-3 rounded-md focus:outline-none focus:border-mango-500 placeholder:text-earth-300 text-sm"
              />
              <button 
                type="submit" 
                className="absolute right-2 bg-mango-500 hover:bg-mango-600 text-earth-600 p-2 rounded-md transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-earth-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-earth-300 text-xs">
            &copy; {new Date().getFullYear()} Vriksa Organic Farms. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-earth-300 hover:text-white text-xs">Privacy Policy</Link>
            <Link href="#" className="text-earth-300 hover:text-white text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
