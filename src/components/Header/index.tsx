import { CartNavLink, HeaderContainer, LocationNavLink } from "./styles";
import coffeeLogo from "../../assets/coffee_delivery_logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Header() {
  const { totalQuantity, customerForm } = useContext(CartContext);
  const { city, state_province } = customerForm.getValues();
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeeLogo} alt="Coffee Mug Logo" />
      </Link>
      <nav>
        {(!city && !state_province) || (
          <LocationNavLink to="/" title="Location">
            <MapPin weight="fill" size={18} /> {city}, {state_province}
          </LocationNavLink>
        )}
        <CartNavLink to="/checkout" title="Cart">
          <ShoppingCart weight="fill" size={18} />
          {totalQuantity <= 0 || <span>{totalQuantity}</span>}
        </CartNavLink>
      </nav>
    </HeaderContainer>
  );
}
