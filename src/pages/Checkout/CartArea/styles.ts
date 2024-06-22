import styled from "styled-components";

export const CartAreaDiv = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  padding: 2.5rem;
  text-align: center;
  align-self: stretch;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
