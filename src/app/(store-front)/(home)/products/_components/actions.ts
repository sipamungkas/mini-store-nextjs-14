"use server";

import { redirect } from "next/navigation";

export const goToUrl = (
  priceRange?: number[],
  categories?: string[],
  onSaleOnly?: boolean
) => {
  let url = "products?";
  if (priceRange || categories || onSaleOnly) {
    url = `${url}minPrice=${priceRange![0]}&maxPrice=${
      priceRange![1]
    }&category=${categories![0]}&onSaleOnly=${onSaleOnly}`;
  }

  // router.push(url);
  redirect(url);
};
