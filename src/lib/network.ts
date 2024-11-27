import {
  HomeSliderApiResponse,
  ProductApiResponse,
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
  timeout: number = 3000
): Promise<ProductApiResponse> => {
  const response = await fetch(
    `${BASE_URL}/products?pagination[pageSize]=${pageSize}&pagination[page]=${page}&status=published&populate[images][fields][0]=url&populate[images][fields][1]=name`,
    {
      headers: {
        ...(BEARER_TOKEN && { Authorization: BEARER_TOKEN }),
      },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, timeout));

  return response.json();
};
