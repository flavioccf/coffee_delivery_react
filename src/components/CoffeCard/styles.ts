import styled from "styled-components";

export const CoffeCardContainer = styled.li`
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-bottom: 1.5rem;
  text-align: center;
  align-self: stretch;
  > *:not(img) {
    padding: 0 7.8%;
    width: 100%;
  }
  img {
    width: 47%;
    display: block;
    position: relative;
    margin-top: -10%;
  }

  h5 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    font-weight: 130%;
    color: ${(props) => props.theme["base-label"]};
  }
`

export const CoffeeTagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  span {
    border-radius: 100px;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
  }
`

export const CoffeeListItemForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.4375rem;
    > span {
      font-family: "Baloo 2", sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      color: ${(props) => props.theme["base-text"]};
      font-weight: 700;
      &::before {
        content: "R$ ";
        font-size: 0.875rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
      }
    }
    div {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 38px;
      gap: 0.5rem;
      input {
        display: none;
      }
      label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 72px;
        height: inherit;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 6px;
        background-color: ${(props) => props.theme["base-button"]};
        color: ${(props) => props.theme["base-title"]};
        font-size: 1rem;
        line-height: 130%;
        padding: 0 0.4rem;
        span {
          color: ${(props) => props.theme.purple};
          cursor: pointer;
        }
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        border-radius: 6px;
        width: 38px;
        height: inherit;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme["purple-dark"]};
      }
    }
`