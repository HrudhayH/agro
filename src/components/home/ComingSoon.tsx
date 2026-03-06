"use client";

import { motion } from "framer-motion";
import { Clock, Bell } from "lucide-react";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <section className="py-24 bg-earth-600 relative overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mango-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-earth-400/30 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl shadow-black/40 bg-earth-500/40 backdrop-blur-sm border border-earth-400/30">
          
          {/* Text Side */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-mango-500/20 text-mango-300 border border-mango-500/30 px-4 py-2.5 rounded-full font-bold text-sm mb-8 w-fit"
            >
              <Clock className="w-4 h-4" /> Season Upcoming
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              The Royal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mango-300 to-mango-500 italic">
                Banganapalli
              </span>{" "}
              Wait
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-earth-200/80 text-lg mb-10 max-w-lg leading-relaxed"
            >
              Our orchards are blossoming. The highly anticipated organic Banganapalli harvest is just weeks away. Reserve your box and taste the uncompromised sweetness of summer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button className="group flex items-center gap-3 bg-mango-500 hover:bg-mango-400 text-earth-700 font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(245,166,35,0.3)] text-lg">
                <Bell className="w-5 h-5 group-hover:animate-bounce" />
                Notify Me
              </button>
              <span className="text-earth-300 text-sm">Strictly limited quantity</span>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative min-h-[400px] lg:min-h-0 overflow-hidden"
          >
            <Image
              src="/images/coming-soon-mango.png"
              alt="Upcoming Banganapalli Mangoes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-earth-500/80 via-transparent to-transparent lg:bg-gradient-to-l"></div>
            {/* Floating badge */}
            <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-md border border-white/10 text-white px-5 py-3 rounded-2xl text-center">
              <p className="text-xs text-earth-200 uppercase tracking-widest mb-1">Coming</p>
              <p className="font-serif text-3xl font-bold text-mango-400">Soon</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

