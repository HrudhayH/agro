"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Leaf, ShieldCheck, Star } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "Mango" | "Rice";
  healthPoints: string[];
  isNew?: boolean;
  rating?: number;
}

interface ProductCardProps { product: Product; }

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  return (
    <motion.div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 border border-earth-50 flex flex-col h-full cursor-pointer" onClick={() => router.push(`/product/${product.id}`)} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, type: "spring", stiffness: 100 }} whileHover={{ y: -6 }}>
      <div className="relative aspect-square overflow-hidden bg-rice-100">
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.isNew && <span className="bg-earth-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">New Harvest</span>}
          {discount > 0 && <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">{discount}% OFF</span>}
        </div>
        <button className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 backdrop-blur-sm text-earth-300 hover:text-rose-500 hover:bg-white transition-all shadow-md opacity-0 group-hover:opacity-100" aria-label="Add to Wishlist" onClick={(e) => e.stopPropagation()}>
          <Heart className="w-5 h-5" />
        </button>
        <Image src={product.image || "/images/placeholder.webp"} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
          <button className="w-full bg-earth-500 hover:bg-earth-400 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-xl transition-colors" onClick={(e) => e.stopPropagation()}>
            <ShoppingBag className="w-5 h-5" /> Add to Cart
          </button>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 mb-3">
          {product.category === "Mango" ? <Leaf className="w-3 h-3 text-mango-500" /> : <ShieldCheck className="w-3 h-3 text-earth-400" />}
          <span className="text-xs font-bold text-earth-400 uppercase tracking-[0.15em]">{product.category}</span>
          {product.rating && <div className="ml-auto flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-mango-400 text-mango-400" /><span className="text-xs font-semibold text-earth-500">{product.rating}</span></div>}
        </div>
        <Link href={`/product/${product.id}`}><h3 className="font-serif text-xl font-semibold text-earth-600 mb-3 line-clamp-1 group-hover:text-mango-600 transition-colors">{product.name}</h3></Link>
        <ul className="flex flex-wrap gap-2 mb-5">
          {product.healthPoints.slice(0, 2).map((point, idx) => (
            <li key={idx} className="bg-earth-50 text-earth-500 text-[11px] px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1.5 border border-earth-100">
              <span className="w-1.5 h-1.5 rounded-full bg-mango-400 shrink-0"></span>{point}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-2xl font-bold text-earth-600">Rs.{product.price}</span>
          {product.originalPrice && <span className="text-sm text-earth-300 line-through">Rs.{product.originalPrice}</span>}
        </div>
      </div>
    </motion.div>
  );
}
