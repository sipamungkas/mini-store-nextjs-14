import { redirect } from "next/navigation";
import {
  CategoryApiResponse,
  HomeSliderApiResponse,
  ProductApiResponse,
  ProductDetailApiResponse,
} from "../../types/response";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

interface GetProductsParams {
  pageSize: number;
  page: number;
  showFeatured?: boolean | undefined;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
  // sort?: string[],
  categoryId?: string;
}

export const getHomeSliders = async (): Promise<HomeSliderApiResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}/home-sliders?populate[image][fields][0]=url&populate[image][fields][1]=formats&pagination[pageSize]=10&pagination[page]=1&status=published`,
      {
        headers: {
          ...(BEARER_TOKEN && { Authorization: BEARER_TOKEN }),
        },
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageCount: 0,
          pageSize: 10,
          total: 0,
        },
      },
    };
  }
};

export const getProducts = async ({
  page = 1,
  pageSize = 10,
  showFeatured = undefined,
  minPrice = undefined,
  maxPrice = undefined,
  categoryId = "",
}: GetProductsParams): Promise<ProductApiResponse> => {
  try {
    let url = `${BASE_URL}/products?pagination[pageSize]=${pageSize}&pagination[page]=${page}&status=published&populate[images][fields][0]=url&populate[images][fields][1]=name&sort=createdAt:desc&populate[category][fields][0]=name`;

    if (showFeatured !== undefined) {
      url = url + `&filters[isFeatured][$eq]=${showFeatured}`;
    }
    if (minPrice !== undefined) {
      url = url + `&filters[price][$gte]=${minPrice}`;
    }

    if (Number(maxPrice) || Number(maxPrice) > 0) {
      url = url + `&filters[price][$lte]=${maxPrice}`;
    }

    if (Number(categoryId)) {
      url = url + `&filters[category][id][$eq]=${categoryId}`;
    }

    console.log({ url });

    const response = await fetch(url, {
      headers: {
        ...(BEARER_TOKEN && { Authorization: BEARER_TOKEN }),
      },
    });

    return response.json();
  } catch (error) {
    console.error(error);
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageCount: 0,
          pageSize,
          total: 0,
        },
      },
    };
  }
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

export const getCategories = async (): Promise<CategoryApiResponse> => {
  const response = await fetch(`${BASE_URL}/categories`, {
    headers: {
      ...(BEARER_TOKEN && { Authorization: BEARER_TOKEN }),
    },
  });
  if (response.status === 404) {
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageCount: 0,
          pageSize: 10,
          total: 0,
        },
      },
    };
  }

  return response.json();
};
