"use client";

import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Settings, Monitor, Shirt, Box, Package, Truck, Zap, Coffee } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Industrial Machinery", icon: <Settings className="w-8 h-8" />, count: "1,200+" },
  { name: "Electronics", icon: <Monitor className="w-8 h-8" />, count: "850+" },
  { name: "Textiles & Apparel", icon: <Shirt className="w-8 h-8" />, count: "2,400+" },
  { name: "Packaging", icon: <Box className="w-8 h-8" />, count: "600+" },
  { name: "Auto Parts", icon: <Package className="w-8 h-8" />, count: "950+" },
  { name: "Logistics", icon: <Truck className="w-8 h-8" />, count: "300+" },
  { name: "Electricals", icon: <Zap className="w-8 h-8" />, count: "1,100+" },
  { name: "Agriculture", icon: <Coffee className="w-8 h-8" />, count: "1,500+" },
];

export function PopularCategories() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-brand-black)] mb-4">
              Explore Popular Categories
            </h2>
            <p className="text-gray-600 max-w-xl">
              Find exactly what you need from our comprehensive directory of industrial and commercial product categories.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2} className="hidden md:block">
            <Link href="#" className="text-[var(--color-brand-primary)] font-medium hover:underline">
              View All Categories
            </Link>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <ScrollAnimation key={index} delay={index * 0.05} animation="fade-up">
              <Link href="#" className="group block bg-[var(--color-brand-gray-light)] rounded-[1.5rem] p-6 hover:bg-[var(--color-brand-primary)] transition-colors duration-300">
                <div className="text-[var(--color-brand-primary)] group-hover:text-white transition-colors mb-4">
                  {category.icon}
                </div>
                <h3 className="font-bold text-[var(--color-brand-black)] group-hover:text-white transition-colors text-lg mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">
                  {category.count} Products
                </p>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}
