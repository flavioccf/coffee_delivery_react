import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { Plus, Minus } from "phosphor-react";
import { CartAreaDiv } from "./styles";

export function CartArea() {
  const { cartState, currency, shippingPrice } = useContext(CartContext);
  const formatToCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(value);
  };
  return (
    <CartAreaDiv>
      <ul>
        {cartState.items.map((item) => {
          return (
            <li key={item.id}>
              {item.name}
              <label>
                <span>
                  <Plus weight="bold" size={12} onClick={() => {}} />
                </span>
                {item.quantity}
                <span>
                  <Minus weight="bold" size={12} onClick={() => {}} />
                </span>
              </label>
              {formatToCurrency(item.quantity * item.price)}
            </li>
          );
        })}
      </ul>
      <ul>
        <li>
          <span>Subtotal</span> <span>{formatToCurrency(cartState.total)}</span>
        </li>
        <li>
          <span>Shipping</span> <span>{formatToCurrency(shippingPrice)}</span>
        </li>
        <li>
          <span>Total</span>
          <span>{formatToCurrency(cartState.total + shippingPrice)}</span>
        </li>
      </ul>
      <button type="submit">CHECKOUT</button>
    </CartAreaDiv>
  );
}
