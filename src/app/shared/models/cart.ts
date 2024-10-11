export interface CartItem {
  id: number;
  title: string;
  image: string;
  newPrice?: number;
  price: number;
  url: string;
}

export interface FullProduct {
  id: number;
  title: string;
  description: string;
  shortDetail: string;
  image: string;
  date: string;
  commentCount: number;
  author: string;
  priceWithDiscount?: number;
  price: number;
}
