import { CoffeCard } from "../../components/CoffeCard/index.tsx";
import { HeroBanner } from "../../components/HeroBanner.tsx";
import { coffeeProductList } from "../../data/coffeeProductListt.ts";
import { CoffeListContainer, HomeContainer } from "./styles.ts";

const coffeItems = coffeeProductList;

export function Home() {
  return (
    <HomeContainer>
      <HeroBanner />
      <h2>Our Coffees</h2>
      <CoffeListContainer>
        {coffeItems.map((coffeItem) => {
          return <CoffeCard {...coffeItem} />;
        })}
      </CoffeListContainer>
    </HomeContainer>
  );
}
