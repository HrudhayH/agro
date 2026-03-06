"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart, ShoppingBag, Star, ChevronLeft,
  ShieldCheck, Leaf, Minus, Plus, CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ImageGallery from "@/components/product/ImageGallery";
import RecipeSection from "@/components/product/RecipeSection";
import SimilarProducts from "@/components/product/SimilarProducts";
import { PRODUCTS } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS[params.id];
  if (!product) notFound();

  const [selectedVariantIdx, setSelectedVariantIdx] = useState(1);
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const variant = product.variants[selectedVariantIdx] ?? product.variants[0];
  const discount = variant.originalPrice
    ? Math.round(((variant.originalPrice - variant.price) / variant.originalPrice) * 100)
    : 0;

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        {/* Breadcrumb */}
        <div className="pt-24 pb-4 bg-rice-100 border-b border-earth-100">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex items-center gap-2 text-sm text-earth-400">
              <Link href="/" className="hover:text-mango-500 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/shop" className="hover:text-mango-500 transition-colors">Shop</Link>
              <span>/</span>
              <span className="text-earth-600 font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Hero Product Section */}
        <section className="py-16 bg-rice-100">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* LEFT — Image Gallery */}
              <motion.div
                className="w-full lg:w-[45%] lg:sticky lg:top-24"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <ImageGallery images={product.images} />
              </motion.div>

              {/* RIGHT — Product Info */}
              <motion.div
                className="flex-1 flex flex-col gap-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {/* Category + Rating */}
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5 bg-earth-50 border border-earth-100 text-earth-500 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {product.category === "Mango" ? <Leaf className="w-3 h-3 text-mango-500" /> : <ShieldCheck className="w-3 h-3" />}
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-mango-400 text-mango-400" : "text-earth-200 fill-earth-200"}`} />
                    ))}
                    <span className="text-sm font-semibold text-earth-600 ml-1">{product.rating}</span>
                    <span className="text-sm text-earth-400">({product.reviewCount.toLocaleString()} reviews)</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold text-earth-600 mb-3 leading-tight">{product.name}</h1>
                  <p className="text-mango-600 font-semibold text-lg italic">{product.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-earth-400 text-lg leading-relaxed border-l-4 border-mango-300 pl-6 py-2">{product.description}</p>

                {/* Variants */}
                <div>
                  <h3 className="text-sm font-bold text-earth-500 uppercase tracking-widest mb-4">Select Pack Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map((v, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedVariantIdx(idx)}
                        className={`relative px-5 py-3 rounded-2xl border-2 text-sm font-semibold transition-all duration-300 flex flex-col items-start ${
                          idx === selectedVariantIdx
                            ? "border-earth-600 bg-earth-600 text-white shadow-lg shadow-earth-500/20"
                            : "border-earth-200 text-earth-500 hover:border-earth-400 bg-white"
                        }`}
                      >
                        <span className="font-bold">{v.label}</span>
                        <span className="text-xs opacity-70">{v.weight}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-5xl font-bold text-earth-600">Rs.{variant.price}</span>
                  {variant.originalPrice && (
                    <>
                      <span className="text-xl text-earth-300 line-through">Rs.{variant.originalPrice}</span>
                      <span className="bg-accent/10 text-accent font-bold text-sm px-3 py-1 rounded-full">{discount}% OFF</span>
                    </>
                  )}
                </div>

                {/* Quantity + Actions */}
                <div className="flex flex-wrap gap-4 items-center">
                  {/* Qty */}
                  <div className="flex items-center bg-earth-50 rounded-full border border-earth-200 overflow-hidden">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="px-4 py-3 text-earth-500 hover:bg-earth-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-5 font-bold text-earth-600 text-lg min-w-[2rem] text-center">{qty}</span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="px-4 py-3 text-earth-500 hover:bg-earth-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button className="flex-1 min-w-[200px] group flex items-center justify-center gap-3 bg-earth-600 hover:bg-earth-500 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-[1.02] shadow-xl shadow-earth-500/20 text-lg">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </button>

                  {/* Wishlist */}
                  <motion.button
                    onClick={() => setWishlisted((w) => !w)}
                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      wishlisted ? "bg-rose-50 border-rose-400 text-rose-500" : "bg-white border-earth-200 text-earth-400 hover:border-rose-300"
                    }`}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-6 h-6 ${wishlisted ? "fill-rose-500 text-rose-500" : ""}`} />
                  </motion.button>
                </div>

                {/* Trust Pills */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Farm-Direct", "No Artificial Ripeners", "COD Available", "Free Shipping on Rs.999+"].map((tag) => (
                    <span key={tag} className="flex items-center gap-2 text-sm text-earth-500 bg-earth-50 border border-earth-100 px-4 py-2 rounded-full font-medium">
                      <CheckCircle2 className="w-4 h-4 text-mango-500" /> {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Health Benefits + Organic Points */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Health Benefits */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="text-mango-500 font-bold tracking-[0.3em] text-xs uppercase mb-4">Why Your Body Loves It</h4>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-600 mb-10">Health Benefits</h2>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {product.healthBenefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="p-6 rounded-2xl bg-earth-50 border border-earth-100 hover:shadow-md hover:-translate-y-1 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <div className="text-3xl mb-3">{benefit.icon}</div>
                      <h3 className="font-bold text-earth-600 mb-2">{benefit.title}</h3>
                      <p className="text-earth-400 text-sm leading-relaxed">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Organic Points */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="text-earth-400 font-bold tracking-[0.3em] text-xs uppercase mb-4">Our Promise to You</h4>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-600 mb-10">100% Organic & Natural</h2>
                </motion.div>
                <div className="flex flex-col gap-5">
                  {product.organicPoints.map((point, idx) => (
                    <motion.div
                      key={idx}
                      className="flex gap-5 p-6 rounded-2xl bg-white border border-earth-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-mango-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-mango-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-earth-600 mb-1">{point.title}</h3>
                        <p className="text-earth-400 text-sm leading-relaxed">{point.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Section */}
        <RecipeSection recipe={product.recipe} />

        {/* Similar Products */}
        <SimilarProducts ids={product.similarProductIds} />
      </main>
      <Footer />
    </>
  );
}
