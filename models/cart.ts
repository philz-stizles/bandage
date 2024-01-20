import { Product } from "./product";

export type CartItem = {
  product: Product;
  quantity: number;
  totalPrice: number
};

export type Cart = {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
};