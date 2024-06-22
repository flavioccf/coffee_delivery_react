import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, ReactNode, useEffect, useReducer } from "react";
import {
  CartItem,
  cartReducer,
  CartStateInterface,
} from "../reducers/cart/reducer";
import { addToCartAcion, updateCartAction } from "../reducers/cart/actions";
import { useForm, UseFormReturn } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface CartContextType {
  cartState: CartStateInterface;
  totalQuantity: number;
  currency: string;
  shippingPrice: number;
  customerForm: UseFormReturn<CheckoutFormData>;
  addToCart: (coffeItemId: string, quantity: number) => void;
  updateCart: (cartItem: CartItem, quantity: number) => void;
  handleSubmitCheckoutData: (data: CheckoutFormData) => void;
}

const checkoutFormValidationSchema = zod.object({
  zip: zod.string().min(6, "Inform the ZIP"),
  street: zod.string().min(2, "Inform the Street"),
  unit: zod.string().optional(),
  city: zod.string().min(2, "Inform the City"),
  state_province: zod.string().min(2, "Inform the State/Province"),
  payment_type: zod.enum(["credit_card", "debit_card", "cash"], {
    invalid_type_error: "Add a payment type",
  }),
});

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const navigate = useNavigate();
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

  const customerForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  });

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

  function handleSubmitCheckoutData(data: CheckoutFormData) {
    console.log(data);
    console.log(cartState);
    if (!cartState.items) {
      toast.error("Cart is empty");
    } else {
      navigate("/order");
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        updateCart,
        totalQuantity,
        currency: "CAD",
        shippingPrice: 3.5,
        customerForm,
        handleSubmitCheckoutData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
