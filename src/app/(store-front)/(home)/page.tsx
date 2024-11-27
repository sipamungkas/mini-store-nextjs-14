import { Suspense } from "react";
import BestSellerProducts from "./_components/best-seller";
import FeaturedCarousel from "./_components/featured-carousel";
import Products from "./_components/products";
import { Remarks } from "./_components/remarks";
import ProductSkeleton from "./_components/products-skeleton";

export default function Home() {
  return (
    <main>
      <FeaturedCarousel />

      <Suspense fallback={<ProductSkeleton />}>
        <BestSellerProducts />
      </Suspense>
      <Suspense fallback={<ProductSkeleton />}>
        <Products />
      </Suspense>
      <Remarks />
    </main>
  );
}
