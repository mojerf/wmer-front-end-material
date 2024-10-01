export interface cartItem {
  id: number;
  title: string;
  image: string;
  priceBefore?: number;
  price: number;
  url: string;
}

export interface fullProduct {
  id: number;
  title: string;
  description: string;
  shortDetail: string;
  image: string;
  date: string;
  commentCount: number;
  author: string;
  priceBefore?: number;
  price: number;
}
