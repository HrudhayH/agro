"use client";

import { motion } from "framer-motion";
import { AlertTriangle, HeartPulse, Info } from "lucide-react";

export default function HealthCautionaries() {
  return (
    <section className="py-24 bg-white border-t border-earth-100">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
            <HeartPulse className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-earth-600 mb-6">Wellness Guidelines</h2>
          <p className="text-earth-400 text-lg max-w-2xl mx-auto">
            While natural and organic foods are immensely beneficial, we believe in mindful consumption. Please read our health cautionaries before purchasing.
          </p>
        </motion.div>

        <div className="grid gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-4 p-6 md:p-8 rounded-2xl bg-earth-50 border-l-4 border-mango-500 shadow-sm"
          >
            <Info className="w-6 h-6 text-mango-500 shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-earth-600 mb-2">Natural Ripening Process</h3>
              <p className="text-earth-400 text-md leading-relaxed">
                Our mangoes are shipped raw to prevent transit damage and are meant to ripen naturally at your home in the hay-box provided. This preserves the fruit's nutritional integrity unlike chemically (Calcium Carbide) ripened alternatives which may look yellow but pose severe health risks.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4 p-6 md:p-8 rounded-2xl bg-earth-50 border-l-4 border-accent shadow-sm"
          >
            <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-earth-600 mb-2">Diabetic Considerations</h3>
              <p className="text-earth-400 text-md leading-relaxed">
                While naturally occurring fructose in mangoes is safer than refined sugar, patients with diabetes should consume sweet varieties like Alphonso in moderation. In contrast, our Black Kavuni Rice has a low Glycemic Index (GI) and is highly recommended as a staple replacement for diabetic individuals.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-4 p-6 md:p-8 rounded-2xl bg-earth-50 border-l-4 border-earth-400 shadow-sm"
          >
            <Info className="w-6 h-6 text-earth-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-earth-600 mb-2">Digestive Adaptation</h3>
              <p className="text-earth-400 text-md leading-relaxed">
                Heritage and unpolished rice varieties contain significantly more fiber than standard white milled rice. If you are transitioning, we recommend mixing it with your regular rice initially to allow your digestive system time to adapt to the high fiber content safely.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
