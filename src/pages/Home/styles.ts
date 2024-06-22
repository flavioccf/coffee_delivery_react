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
`;

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
  }

  @media (max-width: 1024px) {
    li {
      width: calc((100% / 3) - 1.875rem);
    }
  }

  @media (max-width: 768px) {
    li {
      width: calc((100% / 2) - 1.875rem);
    }
  }

  @media (max-width: 480px) {
    li {
      width: 100%;
    }
  }
`;
