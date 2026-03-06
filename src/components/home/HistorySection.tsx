"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const pillars = [
  "100% Pesticide-Free Farming",
  "Natural Rainwater Harvesting",
  "Regenerative Soil Practices",
];

export default function HistorySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="py-28 bg-earth-50 relative overflow-hidden">
      {/* Decorative radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mango-100 rounded-full blur-[150px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Images Grid with parallax */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-6 min-h-[500px]">
            <motion.div style={{ y: y1 }} className="mt-12 rounded-3xl overflow-hidden aspect-[4/5] relative shadow-xl">
              <Image src="/images/farm-1.png" alt="Our Organic Farm" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 to-transparent"></div>
            </motion.div>
            <motion.div style={{ y: y2 }} className="mb-12 rounded-3xl overflow-hidden aspect-[4/5] relative shadow-xl">
              <Image src="/images/farm-2.png" alt="Mango Orchard" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 to-transparent"></div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-mango-500 font-bold tracking-[0.3em] uppercase text-sm mb-5">Our Heritage</h4>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-earth-600 mb-8 leading-tight">
                Rooted in Tradition,{" "}
                <span className="italic font-light text-earth-400">Growing for Tomorrow</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-earth-400 text-lg mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              For over three generations, Vriksa Farms has cultivated land with a single philosophy: Nature knows best. We eschew synthetic chemicals, allowing our mango trees and rice paddies to draw nutrients from enriched, living soil.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-earth-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Our heritage rice varieties are native seeds adapted to the local climate over centuries, requiring less water and offering dense nutritional profiles unmatched by modern hybrids.
            </motion.p>

            <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
              {pillars.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx + 0.4, duration: 0.5 }}
                  className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-earth-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-mango-500 shrink-0" />
                  <span className="text-earth-600 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
