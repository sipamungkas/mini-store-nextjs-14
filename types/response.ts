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
  salePrice: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: ProductImage[];
}

export interface ProductApiResponse {
  data: ProductItem[];
  meta: Meta;
}
