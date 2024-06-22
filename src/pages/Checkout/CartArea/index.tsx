import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { Plus, Minus, Trash } from "phosphor-react";
import {
  CartAreaDiv,
  CartAreaItemsList,
  CartCheckoutButton,
  CartEmpty,
  CartSummaryList,
} from "./styles";
import { Link } from "react-router-dom";

export function CartArea() {
  const { cartState, currency, shippingPrice, updateCart } =
    useContext(CartContext);
  const formatToCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(value);
  };

  const cartHasItems = !!cartState.items.length;
  return (
    <CartAreaDiv>
      {cartHasItems ? (
        <>
          <CartAreaItemsList>
            {cartState.items.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h5>{item.name}</h5>
                    <span>
                      <label>
                        <span>
                          <Plus
                            weight="bold"
                            size={12}
                            onClick={() => {
                              updateCart(item, 1);
                            }}
                          />
                        </span>
                        {item.quantity}
                        <span>
                          <Minus
                            weight="bold"
                            size={12}
                            onClick={() => {
                              updateCart(item, -1);
                            }}
                          />
                        </span>
                      </label>
                      <label
                        onClick={() => {
                          updateCart(item, -item.quantity);
                        }}
                      >
                        <span>
                          <Trash weight="bold" size={16} />
                        </span>
                        Remove
                      </label>
                    </span>
                  </div>
                  <p>{formatToCurrency(item.quantity * item.price)}</p>
                </li>
              );
            })}
          </CartAreaItemsList>
          <CartSummaryList>
            <li>
              <span>Subtotal</span>{" "}
              <span>{formatToCurrency(cartState.total)}</span>
            </li>
            <li>
              <span>Shipping</span>{" "}
              <span>{formatToCurrency(shippingPrice)}</span>
            </li>
            <li>
              <span>Total</span>
              <span>{formatToCurrency(cartState.total + shippingPrice)}</span>
            </li>
          </CartSummaryList>
          <CartCheckoutButton form="checkout" type="submit">
            CHECKOUT
          </CartCheckoutButton>
        </>
      ) : (
        <CartEmpty>
          <p>Your cart is empty.</p>
          <p>
            Go to the <Link to="/">Home Page</Link> and add items to your cart
          </p>
        </CartEmpty>
      )}
    </CartAreaDiv>
  );
}
