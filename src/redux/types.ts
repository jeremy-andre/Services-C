//  Item Types ---------------------------------------------------
export interface Item {
  id: number;
  image: string;
  name: string;
  price: number;
  category: string;
}

//  Cart Types ---------------------------------------------------
export interface CartState {
  cart: Item[];
}

//  Items Types --------------------------------------------------
export interface ItemsState {
  items: Item[];
  itemName: Item[];
  status: "idle" | "loading" | "failed";
}
