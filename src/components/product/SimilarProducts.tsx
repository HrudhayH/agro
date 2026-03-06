"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import { Leaf, ShieldCheck, Star, ShoppingBag } from "lucide-react";

export default function SimilarProducts({ ids }: { ids: string[] }) {
  const products = ids.map((id) => PRODUCTS[id]).filter(Boolean).slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-600 mb-4">You May Also Love</h2>
          <p className="text-earth-400 text-lg max-w-xl mx-auto font-light">Handpicked selections from the same Earth that brought you this product.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const variant = product.variants[1] ?? product.variants[0];
            const discount = variant.originalPrice
              ? Math.round(((variant.originalPrice - variant.price) / variant.originalPrice) * 100)
              : 0;

            return (
              <motion.div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-earth-100 transition-shadow duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5, type: "spring" }}
                whileHover={{ y: -6 }}
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {discount > 0 && (
                      <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">{discount}% OFF</span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {product.category === "Mango"
                        ? <Leaf className="w-3 h-3 text-mango-500" />
                        : <ShieldCheck className="w-3 h-3 text-earth-400" />}
                      <span className="text-xs font-bold text-earth-400 uppercase tracking-widest">{product.category}</span>
                      <div className="ml-auto flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-mango-400 text-mango-400" />
                        <span className="text-xs font-semibold text-earth-500">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-earth-600 mb-1 group-hover:text-mango-600 transition-colors">{product.name}</h3>
                    <p className="text-earth-400 text-sm mb-4 line-clamp-2">{product.tagline}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-earth-600">Rs.{variant.price}</span>
                        {variant.originalPrice && (
                          <span className="text-sm text-earth-300 line-through">Rs.{variant.originalPrice}</span>
                        )}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-earth-50 flex items-center justify-center text-earth-500 group-hover:bg-mango-500 group-hover:text-white transition-all duration-300 border border-earth-100">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
