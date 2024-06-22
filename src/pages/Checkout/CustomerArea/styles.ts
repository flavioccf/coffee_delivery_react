import styled from "styled-components";

export const CustomerAreaInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    padding: 2.5rem;
    background-color: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
    width: 100%;
  }
`;

export enum customerAreaTitleColors {
  YELLOW = "yellow",
  PURPLE = "purple",
}

interface CustomerAreaTitleProps {
  $icon_color?: customerAreaTitleColors;
}

export const CustomerAreaTitle = styled.div<CustomerAreaTitleProps>`
  display: flex;
  gap: 1rem;
  h3 {
    margin: 0;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    small {
      font-size: 0.825rem;
    }
  }
  svg {
    ${(props) => {
      if (props?.$icon_color) {
        return `color: ${props.theme[props.$icon_color]}`;
      }
    }}
  }
`;

export const CustomerAreaInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

interface CustomerAreaInputProps {
  $input_width?: number;
}

export const CustomerAreaInput = styled.input<CustomerAreaInputProps>`
  border: 0;
  outline: none;
  background-color: ${(props) => props.theme["base-input"]};
  padding: 0.75rem;
  font-size: 0.825rem;
  line-height: 130%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  width: ${(props) => {
    return props?.$input_width
      ? `calc(${props.$input_width}% - 0.5rem)`
      : "100%";
  }};
`;

export const CustomerAreaRadioLabel = styled.label`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: ${(props) => props.theme["base-button"]};
  font-size: 0.825rem;
  line-height: 160%;
  text-transform: uppercase;
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  padding: 1rem;
  transition: 0.3s;
  span {
    display: flex;
    color: ${(props) => props.theme.purple};
  }
  input {
    display: none;
  }
  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    border-color: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }
  &:has(input:checked) {
    background-color: ${(props) => props.theme["purple-light"]};
    border-color: ${(props) => props.theme["purple"]};
  }
`;
