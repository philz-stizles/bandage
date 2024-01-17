import { Product } from "./product";

type CartItem = {
  product: Product;
  quantity: number;
  totalPrice: number
};

export type Cart = {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
};