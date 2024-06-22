import { CartItem } from "./reducer";

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  UPDATE_CART = "UPDATE_CART",
  CLEAR_CART = "CLEAR_CART",
}

export interface CartAction {
  type: string;
  payload?: {
    coffeItemId?: string;
    cartItem?: CartItem;
    quantity: number;
  };
}

export function addToCartAcion(coffeItemId: string, quantity: number) {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      coffeItemId,
      quantity,
    },
  };
}

export function updateCartAction(cartItem: CartItem, quantity: number) {
  return {
    type: CartActionTypes.UPDATE_CART,
    payload: {
      cartItem,
      quantity,
    },
  };
}

export function clearCartActio() {
  return {
    type: CartActionTypes.CLEAR_CART,
  };
}
