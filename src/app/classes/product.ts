export class Product {
  id: string;
  data: ProductDetail;
}

export class ProductDetail {
  price: number;
  title: string;
  description: string;
  category: string;
  employee: string;
  reviews?: Reviews[];

  constructor(product: ProductDetail) {

    this.price = product.price;
    this.title = product.title;
    this.description = product.description;
    this.category = product.category;
    this.employee = product.employee;
    this.reviews = product.reviews;
  }
}

export class Reviews {
  title: string;
  user: string;
  description: string;
}
