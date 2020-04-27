import css from 'styled-jsx/css';

export default css.global/* css */`
  .product {
    position: relative;
    padding-top: 8.5rem;
    min-height: 610px;
    margin-bottom: 110px;

    .product-bg {
      background-color: #eee;
      min-height: 370px;
      padding: 185px 2.5rem 0; // 11rem 2.5rem 2rem;
      position: relative;

      h4 {
        font-family: ProximaNova-Light;

        span {
          & > strong {
            font-family: ProximaNova-Bold;
          }
          small {
            font-size: x-small;
          }
          &.font-weight-bold {
            font-family: ProximaNova-Bold;

            & > div {
              white-space: nowrap;
              & > span {
                & > small {
                  top: -15px;
                  right: -20px;
                  @media(max-width: 576px){
                    right: 0px;
                  }
                }
              }
            }
          }
        }
      }
      h5 {
        font-family: ProximaNova-Light;

        strong {
          font-family: ProximaNova-Bold;
        }
      }

      img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -35%;
      }

      p {
        font-size: .85rem;
      }
    }
    .button-add-to-cart {
      background-color: #37baf1;
      border-color: transparent;
      border-radius: .25rem;
      color: #fff;
      font-size: .85rem;
      height: 70px;
      letter-spacing: .15rem;
      bottom: -35px;
      padding: 0 28px !important;
      position: absolute;
      width: calc(100% - 5rem);
      outline: none;
    
      &:hover {
          background-color: #0098d8;
          border-color: transparent;
          color: #fff;
      }
    }
    p {
      &.text-blue {
        color: #37baf1;

        a {
          color: #37baf1;
        }
      }
      &:last-child {
        font-size: .85rem;
        letter-spacing: .15rem;
        position: absolute;
        bottom: 0;
        width: 100%;
      }
    }
  }
`;
