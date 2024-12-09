"use server";

import { redirect } from "next/navigation";

export const goToUrl = (
  priceRange?: number[],
  category?: string,
  onSaleOnly?: boolean
) => {
  let url = "products?";
  if (priceRange || category || onSaleOnly) {
    url = `${url}minPrice=${priceRange![0]}&maxPrice=${
      priceRange![1]
    }&category=${category}&onSaleOnly=${onSaleOnly}`;
  }

  // router.push(url);
  redirect(url);
};
