"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-earth-600">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/images/mango-hero-bg.jpg" 
          alt="Premium Mango Orchard" 
          fill 
          priority
          className="object-cover opacity-40 mix-blend-overlay"
        />
      </motion.div>
      
      {/* Texture & Gradients */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/images/noise.png')] mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mango-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-earth-400/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-600/50 to-earth-600 z-10"></div>

      <motion.div 
        style={{ y: yContent, opacity: opacityContent }}
        className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20 pt-20"
      >
        <div className="flex flex-col items-center justify-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-mango-500/40 bg-black/30 backdrop-blur-md text-mango-300 text-sm font-medium mb-8 shadow-[0_0_30px_rgba(245,166,35,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-mango-400" /> 100% Natural & Organic
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold leading-tight text-white mb-6 drop-shadow-2xl"
          >
            Nature's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mango-300 to-mango-500 italic px-2">Finest</span> Harvest
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-earth-100/90 text-lg md:text-2xl leading-relaxed mb-12 max-w-2xl font-light drop-shadow-md"
          >
            Discover the pure taste of health. Handpicked organic mangoes and heritage rice varieties, cultivated with love and respect for nature.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link href="/shop" className="group relative overflow-hidden bg-mango-500 text-earth-600 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-[0_0_40px_rgba(245,166,35,0.4)]">
              <span className="relative z-10 flex items-center gap-2">Explore Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 h-full w-full bg-mango-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
            </Link>
            <Link href="#categories" className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-semibold text-lg flex items-center justify-center transition-all hover:scale-105">
              View Categories
            </Link>
          </motion.div>
          
          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-8 w-full border-t border-earth-400/30"
          >
            {[
              { stat: "10k+", label: "Happy Customers" },
              { stat: "100%", label: "Certified Organic" },
              { stat: "24h", label: "Farm to Home" }
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-white font-serif font-bold text-3xl md:text-4xl mb-1">{badge.stat}</span>
                <span className="text-mango-200/80 text-sm tracking-widest uppercase">{badge.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
