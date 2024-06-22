import styled from "styled-components";
import heroBkg from "./../../assets/hero_bkg.svg"

export const HeroBannerContainer = styled.div`
  background-image: url(${heroBkg});
  background-size: contain;
  background-position: center;
  padding: 5.75rem 12%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    span {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h1 {
        font-family: "Baloo 2", sans-serif;
        font-optical-sizing: auto;
        font-weight: 800;
        font-style: normal;
        font-size: 3rem;
        line-height: 130%;
        color: ${props => props.theme["black-100"]};
      }
      h3 {
        font-family: 'Robot', sans-serif;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 130%;
      }
    }
  }
  img {
    width: 42.5%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.25rem;
  }
`

export enum listColors {
  DARK_YELLOW = 'yellow-700',
  YELLOW = 'yellow-500',
  GRAY = 'gray-800',
  PURPLE = 'purple-500'
}

interface listColorProps {
  statusColor: listColors
}

export const ListItem = styled.li<listColorProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  width: 50%;
  
  span {
    background: ${(props) => props.theme[props.statusColor]};
    color: ${(props) => props.theme.white};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`