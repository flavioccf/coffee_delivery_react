import { useContext } from "react";
import deliveryImg from "../../assets/delivery.png";
import { CartContext } from "../../contexts/CartContext";
import {
  OrderContainer,
  OrderDetailListItem,
  OrderDetails,
  OrderDetailsHeading,
  OrderDetailsSummary,
  OrderImageContainer,
} from "./styles";
import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { listColors } from "../../components/HeroBanner.tsx/styles";
import { Link } from "react-router-dom";

export function Order() {
  const { customerForm, cartState } = useContext(CartContext);
  const customerDetails = customerForm.getValues();
  const hasCustomerDetails = Object.keys(customerDetails).length > 0;
  const hasItemsInCart = cartState?.items.length > 0;
  return (
    <OrderContainer>
      <OrderDetails>
        {hasCustomerDetails && hasItemsInCart ? (
          <>
            <OrderDetailsHeading>
              <h1>Yasss! Order Confirmed</h1>
              <p>Soon your coffee will be delivered to you.</p>
            </OrderDetailsHeading>
            <OrderDetailsSummary>
              <div>
                <ul>
                  <OrderDetailListItem $statusColor={listColors.PURPLE}>
                    <span>
                      <MapPin size={16} weight="fill" />
                    </span>{" "}
                    <p>
                      Delivery Location:{" "}
                      <strong>
                        {customerDetails?.unit} {customerDetails.street},{" "}
                        {customerDetails.city} -{" "}
                        {customerDetails.state_province}
                      </strong>
                    </p>
                  </OrderDetailListItem>
                  <OrderDetailListItem $statusColor={listColors.YELLOW}>
                    <span>
                      <Timer size={16} weight="fill" />
                    </span>
                    <p>
                      Estimated Delivery: <strong>20~30 min</strong>
                    </p>
                  </OrderDetailListItem>
                  <OrderDetailListItem $statusColor={listColors.DARK_YELLOW}>
                    <span>
                      <CurrencyDollar size={16} />
                    </span>{" "}
                    <p>
                      Payment on arrival by:{" "}
                      <strong>
                        {customerDetails.payment_type?.replace("_", " ")}
                      </strong>
                    </p>
                  </OrderDetailListItem>
                </ul>
              </div>
            </OrderDetailsSummary>
          </>
        ) : (
          <>
            <OrderDetailsHeading>
              <h1>Your order is not complete</h1>
              <p>
                Please Check your details and items in the cart{" "}
                <Link to="/checkout">Here</Link>
              </p>
            </OrderDetailsHeading>
          </>
        )}
      </OrderDetails>
      <OrderImageContainer>
        <img src={deliveryImg} alt="Delivery Guy on a motorcicle" />
      </OrderImageContainer>
    </OrderContainer>
  );
}
