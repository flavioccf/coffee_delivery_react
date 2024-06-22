import { produce } from "immer";
import { CoffeeItem, coffeeProductList } from "../../data/coffeeProductListt";
import { CartAction, CartActionTypes, updateCartAction } from "./actions";

export interface CartItem extends CoffeeItem {
  quantity: number;
}

export interface CartStateInterface {
  items: CartItem[];
  total: number;
}

function calculateCartTotal(cartItems: CartItem[]) {
  return cartItems.reduce((acc, current) => {
    const priceTimesQuantity = current.quantity * current.price;
    return priceTimesQuantity + acc;
  }, 0);
}

export function cartReducer(state: CartStateInterface, action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      const coffeItemId = action.payload?.coffeItemId;
      const quantity = action.payload?.quantity || 0;
      const existsInCart = state.items.find((item) => item.id === coffeItemId);
      const coffeeItem = coffeeProductList.find(
        (item) => coffeItemId === item.id
      );
      if (coffeeItem) {
        const newCartItem: CartItem = {
          ...coffeeItem,
          quantity,
        };
        if (existsInCart) {
          return cartReducer(state, updateCartAction(existsInCart, quantity));
        }
        return produce(state, (draft) => {
          draft.items.push(newCartItem);
          draft.total = calculateCartTotal(draft.items);
        });
      } else {
        return state;
      }
    }
    case CartActionTypes.UPDATE_CART: {
      const cartItem = action.payload?.cartItem;
      if (!cartItem) return state;
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex(
          (item) => item.id === cartItem.id
        );
        if (itemIndex !== -1) {
          draft.items[itemIndex].price = 11;
          const newQuantiy =
            draft.items[itemIndex].quantity + (action.payload?.quantity || 0);
          if (newQuantiy >= 1) {
            const item = draft.items[itemIndex];
            draft.items[itemIndex] = { ...item, quantity: newQuantiy };
          } else {
            draft.items.splice(itemIndex, 1);
          }
          draft.total = calculateCartTotal(draft.items);
        }
      });
    }
    default:
      return state;
  }
}
