import { ProductItemSkeleton } from "@/components/products/product-item-skeleton";

export default function ProductSkeleton() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductItemSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
