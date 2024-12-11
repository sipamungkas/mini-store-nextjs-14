import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Filters from "./_components/filters";
import { getProducts } from "@/lib/api";
import ProductItem from "@/components/products/product-item";

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
          <div className="mt-8 flex justify-center space-x-2">
            <Button
              variant="outline"
              // onClick={() => paginate(currentPage - 1)}
              // disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            {Array.from({
              length: res.meta.pagination.pageCount,
            }).map((_, index) => (
              <Button
                key={index}
                variant="outline"
                // variant={currentPage === index + 1 ? "default" : "outline"}
                // onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              // onClick={() => paginate(currentPage + 1)}
              // disabled={
              //   currentPage ===
              //   Math.ceil(filteredProducts.length / productsPerPage)
              // }
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
