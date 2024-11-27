import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProductItem from "@/components/products/product-item";
import { TabsSection } from "./_components/tabs-section";
import { ProductImagesCarousel } from "./_components/product-images-carousel";
import { ProductQuantity } from "./_components/product-quantity";
import { getProductBySlug } from "@/lib/api";

const relatedProducts = [
  {
    id: "1",
    name: "Related T-Shirt 1",
    price: 24.99,
    image: "/trendy-tshirt.png",
    slug: "related-tshirt-1",
  },
  {
    id: "2",
    name: "Related T-Shirt 2",
    price: 22.99,
    salePrice: 16.99,
    image: "/stylish-jean.png",
    slug: "related-tshirt-1",
  },
  {
    id: "3",
    name: "Related T-Shirt 3",
    price: 26.99,
    salePrice: 16.99,
    image: "/cozy-sweater.png",
    slug: "related-tshirt-1",
  },
  {
    id: "4",
    name: "Related T-Shirt 4",
    price: 23.99,
    salePrice: 16.99,
    image: "/classic-sneaker.jpg",
    slug: "related-tshirt-1",
  },
];

export default async function ProductDetails({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params.slug;
  // console.log({ slug, params });
  const res = await getProductBySlug(slug);
  const data = res.data;
  // console.log(data);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Image Carousel */}
        <ProductImagesCarousel images={data?.images} />

        {/* Product Details */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              ${data.isSale ? data.salePrice : data.price}
            </span>
            {data.isSale && (
              <span className="text-sm text-gray-500 line-through">
                ${data.price}
              </span>
            )}
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Separator />
          <div className="flex items-center space-x-4">
            <ProductQuantity />
            <Button className="h-10 px-8">Add to cart</Button>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <Separator />
          <div className="space-y-2">
            <p>
              <strong>SKU:</strong> N/A
            </p>
            <p>
              <strong>Categories:</strong> {data.category.name}
            </p>
            <p>
              <strong>Tags:</strong> Modern, Design
            </p>
          </div>
          <Separator />
          <TabsSection description={data.description ?? ""} />
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <ProductItem
              key={product.id}
              slug={product.slug}
              name={product.name}
              id={product.id}
              image={product.image}
              price={product.price}
              salePrice={product.salePrice}
              category="T-Shirts"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
