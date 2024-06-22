import { CartArea } from "./CartArea";
import { CustomerArea } from "./CustomerArea";
import {
  CartAreaContainer,
  CheckoutContainer,
  CustomerAreaContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CustomerAreaContainer>
        <h3>Complete Your Order</h3>
        <CustomerArea />
      </CustomerAreaContainer>
      <CartAreaContainer>
        <h3>Selected Coffees</h3>
        <CartArea />
      </CartAreaContainer>
    </CheckoutContainer>
  );
}
