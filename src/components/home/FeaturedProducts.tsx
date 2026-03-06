"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard, { Product } from "@/components/ui/ProductCard";
import { ArrowRight } from "lucide-react";

const ALL_PRODUCTS: Product[] = [
  { id: "1", name: "Alphonso Premium Mango", price: 1500, originalPrice: 1800, image: "/images/mango-1.png", category: "Mango", healthPoints: ["Rich in Vitamin C", "No Artificial Ripeners"], isNew: true, rating: 4.9 },
  { id: "2", name: "Kesar Organic Sweet", price: 1200, image: "/images/mango-2.png", category: "Mango", healthPoints: ["Immunity Booster", "100% Organic"], rating: 4.7 },
  { id: "3", name: "Black Kavuni Rice", price: 450, originalPrice: 500, image: "/images/rice-1.png", category: "Rice", healthPoints: ["High Antioxidants", "Diabetic Friendly"], isNew: true, rating: 4.8 },
  { id: "4", name: "Sona Masuri Heritage", price: 350, image: "/images/rice-2.png", category: "Rice", healthPoints: ["Unpolished", "Easy Digestion"], rating: 4.6 },
];

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("Best Buy");
  const tabs = ["Best Buy", "Most Popular", "Most Loved"];
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div>
            <h4 className="text-mango-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">Handpicked for You</h4>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-earth-600 mb-4">Curated Favorites</h2>
            <p className="text-earth-400 max-w-lg text-xl font-light">Explore our most sought-after organic yields, loved by families across the country.</p>
          </div>
          <div className="flex bg-earth-50 rounded-full p-1.5 border border-earth-100 shadow-inner flex-shrink-0">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`relative px-5 py-3 rounded-full text-sm font-semibold transition-colors z-10 ${activeTab === tab ? "text-earth-600" : "text-earth-400 hover:text-earth-600"}`}>
                {activeTab === tab && <motion.div layoutId="activeTabBg" className="absolute inset-0 bg-white rounded-full -z-10 shadow border border-earth-200" transition={{ type: "spring", stiffness: 400, damping: 35 }} />}
                {tab}
              </button>
            ))}
          </div>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} variants={containerVariants} initial="hidden" animate="show" exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ALL_PRODUCTS.map((product) => (<ProductCard key={`${activeTab}-${product.id}`} product={product} />))}
          </motion.div>
        </AnimatePresence>
        <motion.div className="mt-16 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
          <button className="group inline-flex items-center gap-3 border-2 border-earth-600 text-earth-600 hover:bg-earth-600 hover:text-white px-10 py-4 rounded-full font-semibold text-base transition-all tracking-widest uppercase hover:shadow-xl hover:-translate-y-1">
            View All Harvest <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
