//  Item Types ---------------------------------------------------
export interface Item {
  category: string;
  id: number;
  image: {
    url: string;
  }[];
  name: string;
  price: number;
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
