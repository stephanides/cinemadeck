import css from 'styled-jsx/css';

export default css`
  .cart-nav-content {
    & > div {
      &:last-child {
        margin-bottom: 0!important;
      }
      & > span {
        &:nth-child(2) {
          strong {
            small {
              font-size: .5rem;
              top: -10px;
              right: -15px;
            }
          }
        }
      }
    }
  }
`;
