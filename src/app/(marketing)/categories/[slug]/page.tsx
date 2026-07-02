import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  getCategoryBySlug, 
  getProductsByCategory, 
  getRelatedCategories, 
  getAllCategorySlugs 
} from "@/lib/productHelpers";
import { CategoryHero } from "@/components/category/CategoryHero";
import { CategorySidebar } from "@/components/category/CategorySidebar";
import { ProductGrid } from "@/components/category/ProductGrid";
import { RelatedCategories } from "@/components/category/RelatedCategories";
import { CategoryCTA } from "@/components/category/CategoryCTA";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
  const params = await props.params;
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.label} | Premium B2B Products`,
    description: `Explore our premium selection of ${category.label.toLowerCase()}. Sourced for quality and designed for professional B2B export globally.`,
    openGraph: {
      title: `${category.label} | Premium B2B Products`,
      description: `Explore our premium selection of ${category.label.toLowerCase()} for global export.`,
      type: "website",
    }
  };
}

export default async function CategoryPage(props: CategoryPageProps) {
  const params = await props.params;
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.value);
  const relatedCategories = getRelatedCategories(category.value);

  // Schema Markup for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": category.label,
    "description": `Premium ${category.label} products for B2B export.`,
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.title,
        "description": product.description,
        "image": product.image
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col bg-white">
        <CategoryHero categoryName={category.label} categoryValue={category.value} />
        
        <div className="container mx-auto px-[4px] sm:px-6 lg:px-8 max-w-7xl py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <CategorySidebar />
            
            <div className="flex-1 w-full min-w-0">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[var(--color-brand-black)]">
                  All {category.label} ({products.length})
                </h2>
              </div>
              <ProductGrid products={products} />
            </div>
          </div>
        </div>

        <RelatedCategories categories={relatedCategories} />
        <CategoryCTA categoryName={category.label} />
      </main>
    </>
  );
}
