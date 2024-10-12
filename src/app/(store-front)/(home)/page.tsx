import BestSellerProducts from "./_components/best-seller";
import FeaturedCarousel from "./_components/featured-carousel";
import Products from "./_components/products";
import { Remarks } from "./_components/remarks";

export default function Home() {
  return (
    <main>
      <FeaturedCarousel />
      <BestSellerProducts />
      <Products />
      <Remarks />
    </main>
  );
}
