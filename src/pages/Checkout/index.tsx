import { CartArea } from "./CartArea";
import {
  CartAreaContainer,
  CheckoutContainerForm,
  CustomerAreaContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainerForm>
      <CustomerAreaContainer>
        <h3>Complete Your Order</h3>
      </CustomerAreaContainer>
      <CartAreaContainer>
        <h3>Selected Coffees</h3>
        <CartArea />
      </CartAreaContainer>
    </CheckoutContainerForm>
  );
}
