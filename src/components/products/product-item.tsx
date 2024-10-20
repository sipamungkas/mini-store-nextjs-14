import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

import { AddToCartBtn } from "./add-to-cart-btn";

interface IProduct {
  image: string;
  name: string;
  price: number;
  id: string;
  salePrice?: number;
  category?: string;
}

const ProductItem = ({
  id,
  image,
  name,
  price,
  salePrice,
  category,
}: IProduct) => {
  return (
    <Link href="products/name" className=" flex flex-1" >
      <Card>
        <CardContent className="p-2 md:p-4 flex flex-col h-full">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-full object-cover mb-4 rounded-md aspect-square"
          />
          <h3 className="font-semibold mb-1 md:mb-2 line-clamp-2 flex-grow">
            {name}
          </h3>
          {category && <p className="mb-2 text-sm text-gray-500">{category}</p>}
          <div className="hidden xl:flex items-center justify-between">
            {salePrice ? (
              <div>
                <span className="text-lg font-bold text-red-500">
                  ${salePrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold">${price.toFixed(2)}</span>
            )}
            <AddToCartBtn key={id} id={id} />
          </div>

          <div className="xl:hidden">
            {salePrice ? (
              <div className="mb-4">
                <span className="text-lg font-bold text-red-500">
                  ${salePrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${price.toFixed(2)}
                </span>
              </div>
            ) : (
              <div className="mb-4">
                <span className="text-lg font-bold">${price.toFixed(2)}</span>
              </div>
            )}
            <div className="mt-auto">
              <AddToCartBtn id={id} />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductItem;
