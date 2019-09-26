import css from 'styled-jsx/css';

export default css`
  .funnel-prod {
    h3 {
      font-family: 'ProximaNova-Bold';
    }
    .product-image {
      img {
        display: block;
        margin: 0 auto;
      }
      button {
        display: block;
        margin: 1rem auto 1rem 8rem;
        background-color: transparent;
        border: 1px solid #ececec;
        outline: none;
      }
      @media screen and (min-width: 760px) {
        button {
          margin: 1rem auto;
        } 
      }
      @media screen and (min-width: 992px) {
        button {
          margin: 1rem auto 1rem 9rem;
        } 
      }
    }
    .price-add-to-cart-container {
      & > div {
        & > span {
          & > div {
            font-size: 3.5rem;
            white-space: nowrap;

            & > span {
              & > small {
                font-size: x-small;
                top: -30px;
                right: -20px;
              }
            }
          }

          @media screen and (min-width: 280px) {
            & > div {
              font-size: 2.5rem;
            }
          }
          @media screen and (min-width: 992px) {
            & > div {
              font-size: 3.5rem;
            }
          }

          &:first-child {
            line-height: 70px;
          }
          &:last-child {
            font-size: 1rem;
          }
        }
      }
      & > button {
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
        outline: none;

        &:hover {
          background-color: #0098d8;
        }
      }
    }
    .show {
      opacity: 1;
    }
    .infoLink {
      border: 0;
      background-color: transparent;
      color: #00bcf5;
      display: flex;
      justify-content: space-between;
      outline: none;
      position: relative;

      & > div {
        border: 2px solid #00bcf5;
        border-radius: 50%;
        height: 25px;
        margin-right: 1rem;
        position: relative;
        width: 25px;

        &.up:before {
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid #00bcf5;
          content: '';
          height: 0;
          position: absolute;
          width: 0;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &.up:after {
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 6px solid #fff;
          content: '';
          height: 0;
          position: absolute;
          width: 0;
          top: calc(50% + 2px);
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &.down:before {
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #00bcf5;
          content: '';
          height: 0;
          position: absolute;
          width: 0;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &.down:after {
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid #fff;
          content: '';
          height: 0;
          position: absolute;
          width: 0;
          top: calc(50% - 2px);
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      @media screen and (min-width: 320px) {
        & > div {
          width: 40px;
        }
      }
      @media screen and (min-width: 410px) {
        & > div {
          width: 30px;
        }
      }
      @media screen and (min-width: 770px) {
        & > div {
          width: 35px;
        }
      }
      @media screen and (min-width: 992px) {
        & > div {
          width: 25px;
        }
      }
    }
  }
`;
