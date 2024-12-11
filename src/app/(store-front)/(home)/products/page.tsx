import Filters from "./_components/filters";
import { getProducts } from "@/lib/api";
import ProductItem from "@/components/products/product-item";
import { Pagination } from "./_components/pagination";

interface SearchParams {
  pageSize?: number;
  page?: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort: string;
  onSaleOnly?: boolean;
}

export default async function ProductList({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  console.log({ searchParams });
  const res = await getProducts({
    pageSize: searchParams.pageSize || 10,
    page: searchParams.page || 1,
    minPrice: searchParams.minPrice || 0,
    maxPrice: searchParams.maxPrice || 0,
    categoryId: searchParams.category,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Product List</h1>

      <div className="flex flex-col md:flex-row">
        {/* Filters - Left Side */}
        <Filters />

        {/* Product Grid - Right Side */}
        <div className="md:w-3/4">
          {res.data.length === 0 && (
            // <div className="flex flex-1 justify-center-center ">
            <p className="text-lg text-center mt-10 mb-10 text-gray-900/90 m-auto">
              No products found
            </p>
            // </div>
          )}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {res.data.map((product) => (
              <ProductItem
                id={product.id}
                name={product.name}
                key={product.id}
                category={product.category.name}
                price={product.price}
                salePrice={product.salePrice}
                image={product.images[0].url}
                slug={product.slug}
              />
            ))}
          </div>

          {/* Pagination */}
          {res.data.length > 0 && (
            <Pagination
              pageCount={res.meta.pagination.pageCount}
              currentPage={res.meta.pagination.page}
            />
          )}
        </div>
      </div>
    </div>
  );
}
