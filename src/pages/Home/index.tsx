import { HeroBanner } from "../../components/HeroBanner.tsx";
import { CoffeListContainer, HomeContainer } from "./styles.ts";

export function Home() {
  return (
    <HomeContainer>
      <HeroBanner />
      <h2>Our Coffees</h2>
      <CoffeListContainer>
        <li>Espresso</li>
        <li>Americano</li>
        <li>Espresso</li>
        <li>Americano</li>
        <li>Americano</li>
      </CoffeListContainer>
    </HomeContainer>
  );
}
