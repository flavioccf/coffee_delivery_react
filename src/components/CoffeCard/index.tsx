import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CoffeCardContainer,
  CoffeeListItemForm,
  CoffeeTagsContainer,
} from "./styles";
import { CoffeeItem } from "../../data/coffeeProductListt";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const coffeeListItemFormValidationSchema = zod.object({
  quantity: zod.number().min(1).max(99),
});

type CoffeeListItemFormData = zod.infer<
  typeof coffeeListItemFormValidationSchema
>;

export function CoffeCard(props: CoffeeItem) {
  const { addToCart } = useContext(CartContext);

  const coffeeListItemForm = useForm<CoffeeListItemFormData>({
    resolver: zodResolver(coffeeListItemFormValidationSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const { handleSubmit, watch, reset, setValue } = coffeeListItemForm;

  const handleAddCoffeeToCart = (data: CoffeeListItemFormData) => {
    addToCart(props.id, data.quantity);
    reset();
  };

  const quantity = watch("quantity");

  const handleSetQuantityValue = (quantityNumber: number) => {
    let newQuantity = quantity + quantityNumber;
    if (newQuantity <= 1) newQuantity = 1;
    setValue("quantity", newQuantity);
  };

  return (
    <CoffeCardContainer>
      <img src={`/images/coffees/${props.id}.png`} alt={props.name} />
      <CoffeeTagsContainer>
        {props.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTagsContainer>
      <h5>{props.name}</h5>
      <p>{props.description}</p>
      <CoffeeListItemForm onSubmit={handleSubmit(handleAddCoffeeToCart)}>
        <span>{props.price}</span>
        <div>
          <label>
            <span>
              <Plus
                weight="bold"
                size={12}
                onClick={() => handleSetQuantityValue(1)}
              />
            </span>
            {quantity}
            <span>
              <Minus
                weight="bold"
                size={12}
                onClick={() => handleSetQuantityValue(-1)}
              />
            </span>
            <input
              name="quantity"
              id={`${props.id}_quantity`}
              type="number"
              defaultValue={quantity}
            ></input>
          </label>
          <button type="submit">
            <ShoppingCart weight="fill" size={20} />
          </button>
        </div>
      </CoffeeListItemForm>
    </CoffeCardContainer>
  );
}
