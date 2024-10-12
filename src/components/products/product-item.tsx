import Image from "next/image";
import { Card, CardContent } from "../ui/card";

import { AddToCartBtn } from "./add-to-cart-btn";

interface IProduct {
  image: string;
  name: string;
  price: number;
  id: string;
}

const ProductItem = ({ id, image, name, price }: IProduct) => {
  return (
    <Card>
      <CardContent className="p-2 md:p-4 flex flex-col h-full">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full object-cover mb-4 rounded-md aspect-square"
        />
        <h3 className="font-semibold mb-1 md:mb-2 line-clamp-2">{name}</h3>
        <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
        <div className="mt-auto">
          <AddToCartBtn id={id} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
