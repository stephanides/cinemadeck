import css from 'styled-jsx/css';

export default css`
  @font-face {
    font-family: ProximaNova-Bold;
    src: url("/static/fonts/ProximaNova-Bold.otf");
  }

  .funnel-prod {
    h3 {
      font-family: 'ProximaNova-Bold';
    }
    .product-image {
      img {
        display: block;
        margin: 0 auto;
      }
    }
    .price-add-to-cart-container {
      & > div {
        & > span {
          & > div {
            font-size: 3.5rem;

            & > span {
              // font-size: 3.5rem;

              & > small {
                font-size: x-small;
                top: -30px;
                right: -20px;
              }
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
    }
  }
`;
