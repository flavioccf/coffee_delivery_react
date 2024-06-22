import styled from "styled-components";
import { listColorProps } from "../../components/HeroBanner.tsx/styles";

export const OrderContainer = styled.div`
  padding: 5.75rem 12%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const OrderDetails = styled.div`
  flex: 1;
`;

export const OrderDetailsHeading = styled.div`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 2rem;
    line-height: 130%;
    color: ${({ theme }) => theme["yellow-dark"]};
  }
  h1 + p {
    font-style: normal;
    font-size: 1.25rem;
    color: ${({ theme }) => theme["base-subtitle"]};
    margin-bottom: 2rem;
  }
`;

export const OrderDetailsSummary = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};

  > div {
    background-color: white;
    border-radius: 6px 36px;
    padding: 2.5rem;
    width: 100%;
    height: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const OrderDetailListItem = styled.li<listColorProps>`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-start;
  align-items: center;
  span {
    background-color: ${(props) => props.theme[props.$statusColor]};
    border-radius: 100%;
    display: flex;
    width: 100%;
    max-width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    color: white;
  }
  p {
    strong {
      text-transform: capitalize;
    }
  }
`;

export const OrderImageContainer = styled.div`
  flex: 1;
  width: 45%;
  max-width: 500px;
  padding: 2.5rem;
  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 65vw;
    margin: 0 auto;
  }
`;
