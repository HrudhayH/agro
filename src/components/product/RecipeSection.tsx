"use client";

import { motion } from "framer-motion";
import { Clock, Users, ChefHat } from "lucide-react";
import type { Recipe } from "@/data/products";

export default function RecipeSection({ recipe }: { recipe: Recipe }) {
  return (
    <section className="py-20 bg-earth-600 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mango-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-mango-500/20 text-mango-300 border border-mango-500/30 px-5 py-2 rounded-full text-sm font-bold mb-6">
            <ChefHat className="w-4 h-4" /> Farm-to-Table Recipe
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{recipe.title}</h2>
          <p className="text-earth-200 text-lg max-w-2xl mx-auto font-light">{recipe.description}</p>

          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-earth-300">
              <Clock className="w-5 h-5 text-mango-400" />
              <span className="text-sm font-medium">{recipe.prepTime}</span>
            </div>
            <div className="w-px h-5 bg-earth-500"></div>
            <div className="flex items-center gap-2 text-earth-300">
              <Users className="w-5 h-5 text-mango-400" />
              <span className="text-sm font-medium">Serves {recipe.servings}</span>
            </div>
          </div>
        </motion.div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Ingredients */}
          <motion.div
            className="bg-earth-500/40 backdrop-blur-sm border border-earth-400/30 rounded-3xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl font-bold text-mango-300 mb-6">Ingredients</h3>
            <ul className="flex flex-col gap-4">
              {recipe.ingredients.map((ingredient, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3 text-earth-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <span className="w-6 h-6 rounded-full bg-mango-500/30 text-mango-300 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  {ingredient}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Steps */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl font-bold text-mango-300">Method</h3>
            {recipe.steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-5 bg-earth-500/30 backdrop-blur-sm border border-earth-400/20 rounded-2xl hover:border-mango-500/40 transition-colors"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <span className="font-serif text-3xl font-bold text-mango-500/50 leading-none flex-shrink-0 w-8">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-earth-200 leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
