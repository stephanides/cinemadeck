import css from 'styled-jsx/css';

export default css.global`
  .cart-checkout-wrapper {
    padding-top: 3rem;
    padding-left: 1rem;
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
                      @media(max-width: 576px){
                        right: 0px;
                      }
                    }
                  }
                }
              }
            }
            &.sum {
              margin-right: 20px;
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
                    @media(max-width: 576px){
                      right: 0px;
                    }
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
    .funnel{
      box-shadow: 0px 0px 20px 0px rgba(134, 133, 133, 0.2);
      margin-bottom: 20px;
      .price-holder{
        display: flex;
        align-items: center;
        justify-content: space-around;
        .with-cross{
          position: relative;
          transform: scale(0.8);
          left: -34px;
          top: -6px;
          .cross{
            width: 124px;
            position: absolute;
            height: 2px;
            background-color: #bababa;
            top: 22px;
            transform: rotate(150deg) translateX(26px);
          }
        }
        .price{
          font-size: 2.5rem !important;
          font-weight: bold;
          position: relative;
          font-family: ProximaNova-Bold;
          color: black;
          margin: 0;
          .currency{
            font-size: .8rem !important;
            color: black;
            top: 12px;
            position: absolute;
            right: -30px;
            font-family: ProximaNova-Regular;
          }
        }
        .price_low{
          font-size: 1rem !important;
          font-weight: bold;
          position: relative;
          color: black;
          top: -15px;
        }
        .price_low_action{
          font-size: 1.3rem !important;
          font-family: ProximaNova-Regular;
          position: relative;
          color: #bababa;
          top: -12px;
        }
        .price-action{
          font-size: 2.2rem !important;
          font-family: ProximaNova-Regular;
          position: relative;
          color: #bababa;
          margin: 0;
          .currency{
            font-size: .8rem !important;
            color: #bababa;
            top: 9px;
            right: -19px;
            position: absolute;
            font-family: ProximaNova-Regular;
          }
          .price_low{
            font-size: 1.3rem !important;
            font-weight: bold;
            position: relative;
            color: #bababa;
            top: -15px;
            font-family: ProximaNova-Regular;
          }
        }
      }
      .funnel-head{
        width: 100%;
        background: rgb(255,249,197);
        background: radial-gradient(circle, rgba(255,249,197,1) 18%, rgba(215,180,81,1) 100%);
        padding: 2rem;
        h6{
          text-transform: uppercase;
          letter-spacing: 6px;
          font-size: 0.7rem;
        }
        h5{
          text-transform: uppercase;
          font-size: 1.25rem;
          margin: 0;
          font-weight: 400;
        }
      }
      .content{
        margin-top: 2rem;
        display: flex;
        align-items: end;
        @media(max-width: 1200px){
          flex-direction: column;
        }
        .cart-button{
          background-color: #37baf1;
          font-weight: bold;
          font-size: 0.7rem !important;
          height: 50px !important;
          margin: 0 auto;
          margin-bottom: 1rem;
        }
        .items{
          margin-left: 1rem;
          h4{
            text-transform: uppercase;
            font-size: 1rem;
            margin: 0;
          }
          img{
            width: 32px;
            margin-right: .5rem;
          }
          .item{
            display: flex;
            align-items: end;
            margin-bottom: .5rem;
            p{
              margin: 0;
              font-family: ProximaNova-Regular;
              font-size: 0.9rem;
              padding-right: 2rem;
              line-height: 16px;
            }
            span{
              color: #cccccc !important;
              font-size: 0.7rem;
              font-family: ProximaNova-Regular;
              top: -6px;
              position: relative;
            }
            h4{
              font-weight: 700;
              font-family: ProximaNova-Bold;
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
  .secure-payment{
    width: 80%;
    margin: auto;
    display: block;
    margin-top: 6rem;
  }
  .right-side{
    @media screen and (max-width: 992px) {
      display:none;
    }
  }
  .all-products{
    text-align: center;
    margin-top: 2rem;
    small{
      color: rgb(142, 151, 160);
      font-family: ProximaNova-Regular;
      font-size: .7rem;
      text-transform: uppercase;
    }
  }
  .form-check-flex{
    display: flex !important;
    justify-content: center;
    margin-top: 3rem;
  }
  .remove-button{
    color: rgb(142, 151, 160) !important;
    background-color: white !important;
    &:hover{
      color: black !important;
    }
  }
  
`;
