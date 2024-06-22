import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CoffeCardContainer,
  CoffeeListItemForm,
  CoffeeTagsContainer,
} from "./styles";
import { CoffeeItem } from "../../data/coffeeProductListt";
import { useState } from "react";

export function CoffeCard(props: CoffeeItem) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleSetQuantity = (value: number) => {
    const newQuantity = quantity + value;
    setQuantity(newQuantity);
  };
  return (
    <CoffeCardContainer>
      <img src={props.img} alt={props.name} />
      <CoffeeTagsContainer>
        {props.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTagsContainer>
      <h5>{props.name}</h5>
      <p>{props.description}</p>
      <CoffeeListItemForm>
        <span>{props.price}</span>
        <div>
          <label>
            <span>
              <Plus
                weight="bold"
                size={12}
                onClick={() => handleSetQuantity(1)}
              />
            </span>
            {quantity}
            <span>
              <Minus
                weight="bold"
                size={12}
                onClick={() => handleSetQuantity(-1)}
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
