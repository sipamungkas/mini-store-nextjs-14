import { redirect } from "next/navigation";
import {
  HomeSliderApiResponse,
  ProductApiResponse,
  ProductDetailApiResponse,
} from "../../types/response";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

export const getHomeSliders = async (): Promise<HomeSliderApiResponse> => {
  const response = await fetch(
    `${BASE_URL}/home-sliders?populate[image][fields][0]=url&populate[image][fields][1]=formats&pagination[pageSize]=10&pagination[page]=1&status=published`,
    {
      headers: {
        ...(BEARER_TOKEN && { Authorization: BEARER_TOKEN }),
      },
    }
  );
  return response.json();
};

export const getProducts = async (
  pageSize: number = 10,
  page: number = 1,
  showFeatured: boolean = false
): Promise<ProductApiResponse> => {
  const response = await fetch(
    `${BASE_URL}/products?pagination[pageSize]=${pageSize}&pagination[page]=${page}&status=published&populate[images][fields][0]=url&populate[images][fields][1]=name&sort=createdAt:desc&populate[category][fields][0]=name${
      showFeatured ? "&filters[isFeatured][$eq]=true" : ""
    }`,
    {
      headers: {
        ...(BEARER_TOKEN && { Authorization: BEARER_TOKEN }),
      },
    }
  );

  return response.json();
};

export const getProductBySlug = async (
  slug: string
): Promise<ProductDetailApiResponse> => {
  const response = await fetch(`${BASE_URL}/products/${slug}`, {
    headers: {
      ...(BEARER_TOKEN && { Authorization: BEARER_TOKEN }),
    },
  });
  if (response.status === 404) {
    redirect("/404");
  }

  return response.json();
};
