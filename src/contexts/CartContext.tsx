import { createContext, ReactNode, useReducer } from "react";
import {
  CartItem,
  cartReducer,
  CartStateInterface,
} from "../reducers/cart/reducer";
import { addToCartAcion, updateCartAction } from "../reducers/cart/actions";

interface CartContextType {
  cartState: CartStateInterface;
  addToCart: (coffeItemId: string, quantity: number) => void;
  updateCart: (cartItem: CartItem, quantity: number) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
      total: 0,
    },
    (initialState) => {
      const storedCartAsJSON = localStorage.getItem(
        "@coffee-shop:cart-state-1.0.0"
      );
      if (storedCartAsJSON) return JSON.parse(storedCartAsJSON);
      return initialState;
    }
  );

  function addToCart(coffeItemId: string, quantity: number) {
    dispatch(addToCartAcion(coffeItemId, quantity));
  }

  function updateCart(cartItem: CartItem, quantity: number) {
    dispatch(updateCartAction(cartItem, quantity));
  }

  return (
    <CartContext.Provider value={{ cartState, addToCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}
