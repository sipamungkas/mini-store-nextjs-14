import ProductItem from "@/components/products/product-item";
import { getProducts } from "@/lib/api";

export default async function BestSellerProducts() {
  const res = await getProducts(4, 1, true);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Product</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {res.data.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              slug={product.slug}
              id={product.id}
              image={product.images[0].url}
              price={product.price}
              salePrice={product.salePrice}
              category={product.category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
