"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    id: "mangoes",
    title: "Premium Mangoes",
    description: "Handpicked, organic, and naturally ripened mangoes from heritage orchards.",
    icon: <Leaf className="w-8 h-8 text-mango-500 group-hover:text-white transition-colors duration-500" />,
    image: "/images/mango-1.png",
    link: "/category/mangoes",
    accent: "bg-mango-500",
  },
  {
    id: "rice",
    title: "Heritage Rice",
    description: "Nutrient-rich, unpolished, and traditionally cultivated organic rice varieties.",
    icon: <ShieldCheck className="w-8 h-8 text-earth-500 group-hover:text-white transition-colors duration-500" />,
    image: "/images/rice-1.png",
    link: "/category/rice",
    accent: "bg-earth-500",
  }
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-earth-600 mb-6 drop-shadow-sm">Our Harvest</h2>
          <p className="text-earth-400 max-w-2xl mx-auto text-xl font-light">
            Explore our curated selection of nature's finest. Cultivated with care, harvested with love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="h-full"
            >
              <Link href={cat.link} className="block group rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-700 h-full relative">
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={cat.image} 
                    alt={cat.title} 
                    fill 
                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  />
                  {/* Gradients to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className={`absolute inset-0 ${cat.accent} mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>
                </div>

                <div className="p-10 md:p-14 flex flex-col h-full relative z-10 min-h-[450px]">
                  
                  <div className="relative mt-auto">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-earth-600 transition-all duration-500"
                    >
                      {cat.icon}
                    </motion.div>
                    
                    <h3 className="font-serif text-4xl font-bold text-white mb-4 drop-shadow-md">{cat.title}</h3>
                    <p className="text-white/80 text-lg mb-8 max-w-sm leading-relaxed font-light">
                      {cat.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-3 text-white font-semibold uppercase tracking-widest text-sm bg-white/20 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white/30 transition-colors">
                      Explore Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
