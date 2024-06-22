import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 12%;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme["background"]};
  nav {
    display: flex;
    gap: 0.5rem;
  }
`;

export const BaseNavLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 8px;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const LocationNavLink = styled(BaseNavLink)`
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
`;

export const CartNavLink = styled(BaseNavLink)`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  position: relative;
  span {
    font-size: 0.875rem;
    font-weight: 700;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    top: -10px;
    right: -10px;
    color: ${(props) => props.theme["yellow-light"]};
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
