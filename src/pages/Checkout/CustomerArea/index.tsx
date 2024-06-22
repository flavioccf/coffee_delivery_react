import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  CustomerAreaInputsContainer,
  CustomerAreaInput,
  CustomerAreaInputContainer,
  CustomerAreaRadioLabel,
  CustomerAreaTitle,
  customerAreaTitleColors,
} from "./styles";
import { useContext, useEffect } from "react";
import { CartContext, CheckoutFormData } from "../../../contexts/CartContext";
import { toast } from "react-toastify";

export function CustomerArea() {
  const { customerForm } = useContext(CartContext);
  const {
    register,
    formState: { errors },
  } = customerForm;

  useEffect(() => {
    (Object.keys(errors) as Array<keyof CheckoutFormData>).forEach(
      (fieldName) => {
        const error = errors[fieldName];
        if (error) {
          toast.error(error.message);
        }
      }
    );
  }, [errors]);

  return (
    <CustomerAreaInputsContainer>
      <div>
        <CustomerAreaTitle $icon_color={customerAreaTitleColors.YELLOW}>
          <MapPinLine size={22} />
          <h3>
            Delivery Address
            <small>Add the delivery address</small>
          </h3>
        </CustomerAreaTitle>
        <CustomerAreaInputContainer>
          <CustomerAreaInput
            type="text"
            {...register("zip")}
            placeholder="ZIP"
            $input_width={35}
          />
          <CustomerAreaInput
            type="text"
            {...register("street")}
            placeholder="Street"
            $input_width={70}
          />
          <CustomerAreaInput
            type="text"
            {...register("unit")}
            placeholder="Unit (Optional)"
            $input_width={30}
          />
          <CustomerAreaInput
            type="text"
            {...register("city")}
            placeholder="City"
            $input_width={70}
          />
          <CustomerAreaInput
            type="text"
            {...register("state_province")}
            placeholder="State/Province"
            $input_width={30}
          />
        </CustomerAreaInputContainer>
      </div>
      <div>
        <CustomerAreaTitle $icon_color={customerAreaTitleColors.PURPLE}>
          <CurrencyDollar size={22} />
          <h3>
            Payment
            <small>Add the payment type</small>
          </h3>
        </CustomerAreaTitle>
        <CustomerAreaInputContainer>
          <CustomerAreaRadioLabel htmlFor="payment_type_credit">
            <span>
              <CreditCard size={16} />
            </span>{" "}
            Credit Card
            <CustomerAreaInput
              id="payment_type_credit"
              type="radio"
              {...register("payment_type")}
              value="credit_card"
            />
          </CustomerAreaRadioLabel>
          <CustomerAreaRadioLabel htmlFor="payment_type_debit">
            <span>
              <Bank size={16} />
            </span>{" "}
            Debit Card
            <CustomerAreaInput
              id="payment_type_debit"
              type="radio"
              {...register("payment_type")}
              value="debit_card"
            />
          </CustomerAreaRadioLabel>
          <CustomerAreaRadioLabel htmlFor="payment_type_cash">
            <span>
              <Money size={16} />
            </span>{" "}
            Cash
            <CustomerAreaInput
              id="payment_type_cash"
              type="radio"
              {...register("payment_type")}
              value="cash"
            />
          </CustomerAreaRadioLabel>
        </CustomerAreaInputContainer>
      </div>
    </CustomerAreaInputsContainer>
  );
}
