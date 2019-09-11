import css from 'styled-jsx/css';

export default css`
  .cart-checkout-wrapper {
    & > div {
      &:first-child {
        top: 0;
        right: 0;
        width: calc(100vw / 2);
        height: 100vh;
      }
    }
    .cart-checkout-container {
      position: relative;
      z-index: 1;
      
      .checkout-content {
        min-height: 400px;

        & > div {
          p {
            font-size: .9rem;

            &.sum {
              span {
                &:first-child {
                  letter-spacing: .25rem;
                }
              }
            }
            button {
              background-color: transparent;
              color: #000;
              width: 15px;
              height: 15px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 0;
              border-radius: 0;
            }
          }
          button {
            background-color: #37baf1;
            border-radius: .25rem;
            border: 0;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: .85rem;
            height: 70px;
            width: 265px;
            letter-spacing: .15rem;
          }
        }
        .warranty {
          aside {
            width: 110px;
            float: left;
          }
        }
      }
    }
  }
`;
