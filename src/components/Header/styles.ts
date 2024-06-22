import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem auto;
  padding: 0 12%;
  width: 100%;

  nav {
    display: flex;
    gap: 0.5rem;
  }
`

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
`

export const LocationNavLink = styled(BaseNavLink)`
  background-color: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple-dark"]};
`

export const CartNavLink = styled(BaseNavLink)`
  background-color: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};
`



