import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import {
  CustomerAreaForm,
  CustomerAreaInput,
  CustomerAreaInputContainer,
  CustomerAreaRadioLabel,
  CustomerAreaTitle,
  customerAreaTitleColors,
} from "./styles";

const customerFormValidationSchema = zod.object({
  zip: zod.string(),
  street: zod.string(),
  unit: zod.string().optional(),
  city: zod.string(),
  state_province: zod.string(),
  payment_type: zod.enum(["credit_card", "debit_card", "cash"]),
});

type CustomerFormData = zod.infer<typeof customerFormValidationSchema>;

export function CustomerArea() {
  const userForm = useForm<CustomerFormData>({
    resolver: zodResolver(customerFormValidationSchema),
  });

  const { handleSubmit } = userForm;

  const handleSubmitCustomerData = (data: CustomerFormData) => {
    console.log(data);
  };

  return (
    <CustomerAreaForm onSubmit={handleSubmit(handleSubmitCustomerData)}>
      <div>
        <CustomerAreaTitle icon_color={customerAreaTitleColors.YELLOW}>
          <MapPinLine size={22} />
          <h3>
            Delivery Address
            <small>Add the delivery address</small>
          </h3>
        </CustomerAreaTitle>
        <CustomerAreaInputContainer>
          <CustomerAreaInput
            type="text"
            name="zip"
            defaultValue={""}
            placeholder="ZIP"
            input_width={35}
          />
          <CustomerAreaInput
            type="text"
            name="street"
            defaultValue={""}
            placeholder="Street"
            input_width={70}
          />
          <CustomerAreaInput
            type="text"
            name="unit"
            defaultValue={""}
            placeholder="Unit (Optional)"
            input_width={30}
          />
          <CustomerAreaInput
            type="text"
            name="city"
            defaultValue={""}
            placeholder="City"
            input_width={70}
          />
          <CustomerAreaInput
            type="text"
            name="state_province"
            defaultValue={""}
            placeholder="State/Province"
            input_width={30}
          />
        </CustomerAreaInputContainer>
      </div>
      <div>
        <CustomerAreaTitle icon_color={customerAreaTitleColors.PURPLE}>
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
              name="payment_type"
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
              name="payment_type"
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
              name="payment_type"
              value="cash"
            />
          </CustomerAreaRadioLabel>
        </CustomerAreaInputContainer>
      </div>
    </CustomerAreaForm>
  );
}
