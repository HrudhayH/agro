"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, User, Menu, X, Leaf } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "#categories" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3 border-b border-earth-100"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Leaf className={`w-8 h-8 transition-colors ${isScrolled ? "text-mango-500 group-hover:text-earth-500" : "text-mango-400 group-hover:text-white"}`} />
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${isScrolled ? "text-earth-600" : "text-white"}`}>Vriksa</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-widest ${
                  isScrolled ? "text-earth-500 hover:text-mango-500" : "text-white/90 hover:text-mango-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-6">
            <button aria-label="Wishlist" className={`transition-colors ${isScrolled ? "text-earth-500 hover:text-accent" : "text-white/90 hover:text-mango-300"}`}>
              <Heart className="w-5 h-5" />
            </button>
            <button aria-label="Cart" className={`transition-colors relative ${isScrolled ? "text-earth-500 hover:text-mango-500" : "text-white/90 hover:text-mango-300"}`}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-mango-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </button>
            <button aria-label="Account" className={`transition-colors ${isScrolled ? "text-earth-500 hover:text-mango-500" : "text-white/90 hover:text-mango-300"}`}>
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden transition-colors ${isScrolled ? "text-earth-600" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-earth-100 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-earth-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-earth-100">
                <button className="flex items-center gap-2 text-earth-600"><Heart className="w-5 h-5" /> Wishlist</button>
                <button className="flex items-center gap-2 text-earth-600"><ShoppingCart className="w-5 h-5" /> Cart (2)</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
