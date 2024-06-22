import styled from "styled-components";

export const CheckoutForm = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 12%;
  width: 100%;
  gap: 3%;
  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const CustomerAreaContainer = styled.div`
  flex: 1;
`;

export const CartAreaContainer = styled.div`
  width: 40%;
  @media (max-width: 1024px) {
    margin-top: 2rem;
    width: 100%;
  }
`;
