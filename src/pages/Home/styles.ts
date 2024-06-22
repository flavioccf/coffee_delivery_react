import styled from "styled-components";

export const HomeContainer = styled.div`
  h2 {
    padding: 3rem 12%;
    font-family: "Baloo 2", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 2rem;
    line-height: 130%;
  }
`

export const CoffeListContainer = styled.ul`
  padding: 3rem 12%;
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  row-gap: 2rem;
  column-gap: 2.5rem;
  li {
    width: calc((100% / 4) - 1.875rem);
    text-align: center;
  }
`

export const CoffeListItem = styled.li`
  background-color: ${(props) => props.theme["gray-300"]};
  border-radius: 8px 50% 8px 50%;
`