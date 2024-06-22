import { ShoppingCart } from "phosphor-react";
import { HeroBanner } from "../../components/HeroBanner.tsx";
import { CoffeListContainer, CoffeListItem, HomeContainer } from "./styles.ts";

export function Home() {
  return (
    <HomeContainer>
      <HeroBanner />
      <h2>Our Coffees</h2>
      <CoffeListContainer>
        <CoffeListItem>
          <span>
            <span>traditional</span>
          </span>
          <h5>Traditional Espresso</h5>
          <p>The most traditional espresso ever</p>
          <div>
            <span>9.90</span>
            <input value={1}></input>
            <button>
              <ShoppingCart size={18} />
            </button>
          </div>
        </CoffeListItem>
        <li>Americano</li>
        <li>Espresso</li>
        <li>Americano</li>
        <li>Americano</li>
      </CoffeListContainer>
    </HomeContainer>
  );
}
