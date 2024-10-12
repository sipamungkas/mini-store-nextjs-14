import ProductItem from "@/components/products/product-item";

const bestSellers = [
  {
    id: "1",
    name: "Trendy T-Shirt",
    price: 29.99,
    image: "/trendy-tshirt.png",
  },
  { id: "2", name: "Stylish Jeans", price: 59.99, image: "/stylish-jean.png" },
  { id: "3", name: "Cozy Sweater", price: 49.99, image: "/cozy-sweater.png" },
  {
    id: "4",
    name: "Classic Sneakers",
    price: 79.99,
    image: "/classic-sneaker.jpg",
  },
];

export default function BestSellerProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {bestSellers.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              id={product.id}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
