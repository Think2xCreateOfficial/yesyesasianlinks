import { productsData, productCategories } from "@/data/products";
import { generateSlug } from "@/utils/slug";
import { Category, Product } from "@/types/data";

export function getCategoryBySlug(slug: string): Category | undefined {
  if (slug === "all") {
    return productCategories.find(c => c.value === "all");
  }
  return productCategories.find(c => generateSlug(c.value) === slug);
}

export function getProductsByCategory(categoryValue: string): Product[] {
  if (categoryValue === "all") return productsData;
  return productsData.filter(p => p.category === categoryValue);
}

export function getRelatedCategories(currentCategoryValue: string): Category[] {
  return productCategories.filter(
    c => c.value !== currentCategoryValue && c.value !== "all"
  );
}

export function generateCategoryStats(categoryValue: string) {
  const products = getProductsByCategory(categoryValue);
  const totalProducts = products.length;
  return {
    totalProducts,
    verifiedSuppliers: "100%",
    exportMarkets: "50+",
    qualityChecked: "ISO 9001"
  };
}

export function getAllCategorySlugs(): string[] {
  return productCategories
    .filter(c => c.value !== "all")
    .map(c => generateSlug(c.value));
}
