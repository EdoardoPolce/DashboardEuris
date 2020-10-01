export interface Product {
  id: string;
  data: ProductDetail;
}

export interface ProductDetail {
  price: number;
  title: string;
  description: string;
  category: string;
  employee: string;
  reviews?: Reviews[];
}

export interface Reviews {
  title: string;
  user: string;
  description: string;
}
