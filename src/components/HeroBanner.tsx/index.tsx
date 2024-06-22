import { HeroBannerContainer, listColors, ListItem } from "./styles";
import coffeeCupImg from "./../../assets/coffee_cup.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function HeroBanner() {
  return (
    <HeroBannerContainer>
      <div>
        <span>
          <h1>
            Get the perfect coffee <br></br>anytime of the day
          </h1>
          <h3>
            With Coffee Delivery you'll drink the best coffee wherever you are,
            whenever you want it
          </h3>
        </span>
        <ul>
          <ListItem $statusColor={listColors.DARK_YELLOW}>
            <span>
              <ShoppingCart weight="fill" size={16} />
            </span>
            Easy and safe shopping
          </ListItem>
          <ListItem $statusColor={listColors.GRAY}>
            <span>
              <Package weight="fill" size={16} />
            </span>
            Keep you coffee warm
          </ListItem>
          <ListItem $statusColor={listColors.YELLOW}>
            <span>
              <Timer weight="fill" size={16} />
            </span>
            Fast and tracked delivery
          </ListItem>
          <ListItem $statusColor={listColors.PURPLE}>
            <span>
              <Coffee weight="fill" size={16} />
            </span>
            Fresh Coffee in your hands
          </ListItem>
        </ul>
      </div>
      <img src={coffeeCupImg} alt="Coffe Cup" />
    </HeroBannerContainer>
  );
}
