"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, PlayCircle, Star, TrendingUp } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { HOME_TESTIMONIALS_HEADER } from "@/data/home";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const testimonial = testimonialsData[currentIndex];

  return (
    <section className="py-6 bg-slate-50 text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
          <div>
            <span className="text-[var(--color-brand-primary)] font-semibold tracking-wider uppercase text-sm mb-2 block">
              {HOME_TESTIMONIALS_HEADER.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              {HOME_TESTIMONIALS_HEADER.heading}
            </h2>
            <p className="text-gray-600 max-w-xl">
              {HOME_TESTIMONIALS_HEADER.description}
            </p>
          </div>
          
          <div className="flex justify-end gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Media Side (Video/Photo) */}
              <div className="lg:col-span-5 relative">
                <div className="h-full min-h-[380px] lg:min-h-full overflow-hidden relative group bg-gray-100">
                  {testimonial.videoUrl ? (
                    <iframe
                      src={testimonial.videoUrl}
                      title={testimonial.title}
                      className="absolute inset-0 w-full h-full border-0 object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <Image 
                        src={testimonial.image || '/placeholder.jpg'} 
                        alt={testimonial.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      
                      <button className="absolute inset-0 flex items-center justify-center group/btn">
                        <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover/btn:scale-110 group-hover/btn:bg-[var(--color-brand-primary)] transition-all shadow-lg">
                          <PlayCircle className="w-10 h-10 text-white" />
                        </div>
                      </button>

                      <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                        <div className="bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                          {testimonial.company}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 p-6 lg:p-8 xl:p-10">
                <Quote className="w-10 h-10 text-[var(--color-brand-primary)]/20 mb-6" />
                
                <h3 className="text-2xl font-light leading-relaxed mb-4 text-gray-900">
                  "{testimonial.description}"
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-8 border-t border-gray-100 pt-8">
                  <div>
                    <div className="font-bold text-md text-gray-900">{testimonial.title}</div>
                    <div className="text-[var(--color-brand-primary)] font-medium">{testimonial.role}</div>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <div className="hidden sm:block w-px h-16 bg-gray-200"></div>

                  <div className="grid grid-cols-2 gap-6 flex-1">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{HOME_TESTIMONIALS_HEADER.businessTypeLabel}</div>
                      <div className="font-semibold text-gray-900">{testimonial.businessType ?? "Enterprise Importer"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" /> {HOME_TESTIMONIALS_HEADER.resultsLabel}
                      </div>
                      <div className="font-semibold text-green-600">{testimonial.result ?? "20% Cost Reduction"}</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
