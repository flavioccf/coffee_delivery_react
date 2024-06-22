import { ShoppingCart } from "phosphor-react";
import {
  CoffeCardContainer,
  CoffeeListItemForm,
  CoffeeTagsContainer,
} from "./styles";
import { CoffeeItem } from "../../data/coffeeProductListt";

export function CoffeCard(props: CoffeeItem) {
  return (
    <CoffeCardContainer>
      <img src={props.img} alt={props.name} />
      <CoffeeTagsContainer>
        {props.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </CoffeeTagsContainer>
      <h5>{props.name}</h5>
      <p>{props.description}</p>
      <CoffeeListItemForm>
        <span>{props.price}</span>
        <div>
          <input type="number" value={1}></input>
          <button>
            <ShoppingCart weight="fill" size={20} />
          </button>
        </div>
      </CoffeeListItemForm>
    </CoffeCardContainer>
  );
}
