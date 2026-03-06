"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";

export default function ImageGallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <motion.div
        key={selected}
        className="relative w-full aspect-square rounded-3xl overflow-hidden bg-earth-50 border border-earth-100 shadow-xl cursor-zoom-in group"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        onClick={() => setLightbox(true)}
      >
        <Image
          src={images[selected]}
          alt={`Product view ${selected + 1}`}
          fill
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-5 h-5" />
        </div>
      </motion.div>

      {/* Thumbnail Strip */}
      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`relative w-20 aspect-square flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              idx === selected
                ? "border-mango-500 shadow-lg shadow-mango-500/30"
                : "border-earth-100 hover:border-earth-300"
            }`}
          >
            <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
            {idx === selected && (
              <div className="absolute inset-0 bg-mango-500/10"></div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <motion.div
              className="relative w-full max-w-3xl aspect-square rounded-3xl overflow-hidden"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            >
              <Image src={images[selected]} alt="Full view" fill className="object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
