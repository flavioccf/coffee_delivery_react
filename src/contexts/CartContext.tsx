import { createContext, ReactNode, useEffect, useReducer } from "react";
import {
  CartItem,
  cartReducer,
  CartStateInterface,
} from "../reducers/cart/reducer";
import { addToCartAcion, updateCartAction } from "../reducers/cart/actions";

interface CartContextType {
  cartState: CartStateInterface;
  totalQuantity: number;
  currency: string;
  shippingPrice: number;
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

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);
    localStorage.setItem("@coffee-shop:cart-state-1.0.0", stateJSON);
  }, [cartState]);

  function addToCart(coffeItemId: string, quantity: number) {
    dispatch(addToCartAcion(coffeItemId, quantity));
  }

  function updateCart(cartItem: CartItem, quantity: number) {
    dispatch(updateCartAction(cartItem, quantity));
  }

  const totalQuantity = cartState.items.reduce(
    (acc, current) => acc + current.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        updateCart,
        totalQuantity,
        currency: "CAD",
        shippingPrice: 3.5,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
