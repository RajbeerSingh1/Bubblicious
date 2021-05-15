import styled from 'styled-components';

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 2rem;

  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;

    display: grid;
    gap: 1rem;
    align-content: start;
    &.menu,
    &.order {
      grid-column: span 1;
      max-height: 600px;
    }
    @media (max-width: 600px) {
      &.menu,
      &.order {
        grid-column: span 2;
      }
      &.total {
        h2 {
          font-size: 2rem;
        }
      }
    }
  }
  input {
    display: block;
    width: 100%;
    margin: 1rem 0 1rem 0;
  }
`;

export default OrderStyles;
