"use server";

import { redirect } from "next/navigation";

export const goToUrl = (
  priceRange?: number[],
  category?: string,
  onSaleOnly?: boolean,
  page?: number
) => {
  let url = "products?";
  if (priceRange || category || onSaleOnly) {
    url = `${url}page=${page || 1}&minPrice=${priceRange![0]}&maxPrice=${
      priceRange![1]
    }&category=${category}&onSaleOnly=${onSaleOnly}`;
  }

  redirect(url);
};
