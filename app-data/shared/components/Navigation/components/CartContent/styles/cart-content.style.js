import css from 'styled-jsx/css';

export default css`
  .cart-nav-content {
    & > div {
      & > span {
        &:nth-child(2) {
          strong {
            small {
              font-size: xx-small;
              top: -10px;
              right: -15px;
            }
          }
        }
      }
    }
  }
`;
