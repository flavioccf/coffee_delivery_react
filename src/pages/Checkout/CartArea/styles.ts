import styled from "styled-components";

export const CartAreaDiv = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  align-self: stretch;
`;

export const CartAreaItemsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  li {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid ${(props) => props.theme["base-button"]};
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    img {
      width: 17.5%;
      height: auto;
      object-fit: contain;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      gap: 0.5rem;
      h5 {
        width: 100%;
        font-size: 1rem;
        line-height: 130%;
        font-weight: 400;
        text-align: left;
      }
      > span {
        display: flex;
        gap: 0.5rem;
      }
      label {
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.25rem;
        width: auto;
        min-width: 72px;
        height: 32px;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 6px;
        background-color: ${(props) => props.theme["base-button"]};
        color: ${(props) => props.theme["base-title"]};
        font-size: 1rem;
        line-height: 130%;
        padding: 0 0.4rem;
        cursor: pointer;
        span {
          color: ${(props) => props.theme.purple};
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    p {
      flex: 1;
      text-align: right;
      font-size: 1rem;
      line-height: 130%;
      font-weight: 700;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const CartSummaryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  li {
    display: flex;
    justify-content: space-between;
    text-align: left;
    font-size: 0.825rem;
    line-height: 130%;
    span:last-child {
      font-size: 1rem;
    }
    &:last-child span {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`;

export const CartCheckoutButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  width: 100%;
  height: 40px;
  font-size: 0.825rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const CartEmpty = styled.div`
  text-align: center;
`;
