import BestSellerProducts from "./_components/best-seller";
import FeaturedCarousel from "./_components/featured-carousel";

export default function Home() {
  return (
    <main>
      <FeaturedCarousel />
      <BestSellerProducts />
    </main>
  );
}
