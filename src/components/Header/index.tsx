import { CartNavLink, HeaderContainer, LocationNavLink } from "./styles";
import coffeeLogo from "../../assets/coffee_delivery_logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="Coffee Mug Logo" />
      <nav>
        <LocationNavLink to="/" title="Location">
          <MapPin weight="fill" size={18} /> City, ST
        </LocationNavLink>
        <CartNavLink to="/" title="Cart">
          <ShoppingCart weight="fill" size={18} />
        </CartNavLink>
      </nav>
    </HeaderContainer>
  );
}
