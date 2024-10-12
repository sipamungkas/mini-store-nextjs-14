import ProductItem from "@/components/products/product-item";

const products = [
  { id: "1", name: "Casual ShirtCasual ShirtCasual ShirtCasual Shirt", price: 34.99, image: "/trendy-tshirt.png" },
  { id: "2", name: "Elegant Dress", price: 89.99, image: "/stylish-jean.png" },
  {
    id: "3",
    name: "Comfortable Pants",
    price: 54.99,
    image: "/cozy-sweater.png",
  },
  {
    id: "4",
    name: "Sporty Jacket",
    price: 99.99,
    image: "/classic-sneaker.jpg",
  },
  {
    id: "5",
    name: "Leather Boots",
    price: 129.99,
    image: "/trendy-tshirt.png",
  },
  { id: "6", name: "Casual Cap", price: 24.99, image: "/stylish-jean.png" },
];

export default function Products() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {products.map((product) => (
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
