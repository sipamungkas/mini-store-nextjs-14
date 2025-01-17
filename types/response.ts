// Home slider interfaces

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Image {
  id: number;
  documentId: string;
  url: string;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
}

export interface DataItem {
  id: number;
  documentId: string;
  url: string;
  isPublished: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface HomeSliderApiResponse {
  data: DataItem[];
  meta: Meta;
}

// Product interfaces

export interface ProductImage {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

export interface ProductItem {
  id: number;
  documentId: string;
  name: string;
  price: number;
  quantity: number;
  isSale: boolean;
  isFeatured: boolean | null;
  salePrice: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: ProductImage[];
  category: {
    id: number;
    documentId: string;
    name: string;
  };
}

export interface ProductApiResponse {
  data: ProductItem[];
  meta: Meta;
}
export interface ProductDetailCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string | null;
}

export interface ProductDetailImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ProductDetailImage {
  id: number;
  documentId: string;
  name: string;
  url: string;
  formats: {
    large?: ProductDetailImageFormat;
    small: ProductDetailImageFormat;
    medium: ProductDetailImageFormat;
    thumbnail: ProductDetailImageFormat;
  };
}

export interface ProductDetail {
  id: number;
  documentId: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  isSale: boolean;
  salePrice: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  isFeatured: boolean;
  category: ProductDetailCategory;
  images: ProductDetailImage[];
}

export interface ProductDetailApiResponse {
  data: ProductDetail;
  meta: Meta;
}

export interface CategoryData {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
}
export interface CategoryApiResponse {
  data: CategoryData[];
  meta: Meta;
}
