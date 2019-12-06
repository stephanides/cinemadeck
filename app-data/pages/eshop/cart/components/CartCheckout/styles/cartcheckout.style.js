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
      
      h3 {
        font-family: ProximaNova-Bold;
      }
      .cart-link {
        cursor:pointer;
        text-decoration:underline !important;
      }
      .checkout-content {
        min-height: 400px;

        & > div {
          p {
            font-size: .9rem;
            
            &.cart-item {
              white-space: nowrap;

              span {
                & > span {
                  & > span {
                    small {
                      font-size: xx-small;
                      top: -10px;
                      right: -20px;
                    }
                  }
                }
              }
            }
            &.sum {
              & > span {
                &:first-child {
                  letter-spacing: .25rem;
                }

                & > span {
                  font-size: 1.25rem;

                  small {
                    font-size: xx-small;
                    top: -10px;
                    right: -20px;
                  }
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
              outline: none;
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
            max-width: 265px;
            width: 100%;
            letter-spacing: .15rem;

            &:hover {
              background-color: #0098d8;
            }
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
  .secure-payment{
    width: 100%;
    margin-top: 2rem;
  }
  .right-side{
    @media screen and (max-width: 768px) {
      display:none;
    }
  }
`;
