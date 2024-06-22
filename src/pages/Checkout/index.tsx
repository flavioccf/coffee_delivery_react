import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartArea } from "./CartArea";
import { CustomerArea } from "./CustomerArea";
import {
  CartAreaContainer,
  CheckoutForm,
  CustomerAreaContainer,
} from "./styles";

export function Checkout() {
  const { customerForm, handleSubmitCheckoutData } = useContext(CartContext);
  const { handleSubmit } = customerForm;

  return (
    <CheckoutForm
      id="checkout"
      onSubmit={handleSubmit(handleSubmitCheckoutData)}
    >
      <CustomerAreaContainer>
        <h3>Complete Your Order</h3>
        <CustomerArea />
      </CustomerAreaContainer>
      <CartAreaContainer>
        <h3>Selected Coffees</h3>
        <CartArea />
      </CartAreaContainer>
    </CheckoutForm>
  );
}
