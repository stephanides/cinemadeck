import css from 'styled-jsx/css';

export default css.global/* css */`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .col-xs-5ths,
  .col-sm-5ths,
  .col-md-5ths,
  .col-lg-5ths {
      position: relative;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
  }

  .col-xs-5ths {
      width: 20%;
      float: left;
  }

  @media (min-width: 768px) {
      .col-sm-5ths {
          width: 20%;
          float: left;
      }
  }

  @media (min-width: 992px) {
      .col-md-5ths {
          width: 20%;
          float: left;
      }
  }

  @media (min-width: 1200px) {
      .col-lg-5ths {
          width: 20%;
          float: left;
      }
  }

  .questions{
    background-image: url("/static/images/steps/background.png");
    padding-bottom: 140px;
    h2{
      padding-top: 100px;
      padding-bottom: 100px;
      font-family: ProximaNova-SemiBold;
      font-size: 2em;
      color:white; 
      letter-spacing: 8px;
      text-transform: uppercase;
      font-size: 1.8em;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.5em;
        padding-bottom: 60px;
        padding-top: 20px;
      }
      @media screen and (max-width: $break-xsmall) {
        font-size: 1.2em;
        letter-spacing: 4px;
      }
    }
    h6{
      font-family: ProximaNova-Regular;
      color: rgb(142, 151, 160);
      text-transform: uppercase;
      letter-spacing: 8px;
      padding-top: 20px;
      text-align: center;
      @media screen and (max-width: $break-large) {
        font-size: 0.95em;
        letter-spacing: 6px;
      }
      @media screen and (max-width: $break-medium) {
        font-size: 0.9em;
        letter-spacing: 4px;
      }
    }
    .faq-items{
      align-items: center;
      padding-top: 200px;
      padding-bottom: 60px;
      justify-content: center;
      padding-left: 20px;
      padding-right: 20px;
      @media screen and (max-width: $break-mobile) {
        padding-top: 40px;
        padding-bottom: 10px;
      }
      .column-5{
        flex: 0 0 20%;
        max-width: 20%;
        position: relative;
        @media screen and (max-width: $break-medium) {
          flex: 0 0 33.33%;
          max-width: 33.33%;
        }
        @media screen and (max-width: $break-mobile) {
          flex: 0 0 50%;
          max-width: 50%;
        }
        @media screen and (max-width: $break-xsmall) {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }
      .mt-40{
        margin-top: 40px;
        @media screen and (max-width: $break-mobile) {
          margin-top: 40px !important;
          left: -45px !important;
        }
      }
      .faq-item{
        height: 440px;
        @media screen and (max-width: $break-large) {
          height: 380px;
        }
        .img-holder{
          display: flex;
          align-items: center;
          position: relative;
          height: 400px;
          @media screen and (max-width: $break-large) {
            height: 360px;
          }
          @media screen and (max-width: $break-small) {
            height: 320px;
          }
        }
        img{
          position: relative;
          left: -20px;
          width: 100%;
          @media screen and (max-width: $break-medium) {
            width: unset;
            margin: 0 auto;
          }
          @media screen and (max-width: $break-mobile) {
            margin: 0 auto;
            width: 80%;
          }
          @media screen and (max-width: $break-xsmall) {
            margin: 0 auto;
            width: 80%;
          }
        }
        .left-small{
          left: -34px;
          @media screen and (max-width: $break-xsmall) {
            left:-40px;
          }
        }
        .presets{
          left:-50px;
        }
      }
    }
    .buy-package-holder{
      width: 380px;
      height: 220px;
      background-color: #1f2126;
      display: block;
      margin: 0 auto;
      position: relative;
      @media screen and (max-width: $break-xsmall) {
        width: 260px;
        height: 240px;
      }
      .text-complete{
        font-family: ProximaNova-Regular;
        color:#acadae;
        letter-spacing: 4px;
        text-transform: uppercase;
        font-size: 0.7em;
        text-align: center;
        padding-top: 30px;
        @media screen and (max-width: $break-xsmall) {
          font-size: 0.55em;
        }
      }
      .price-holder{
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
        padding-top: 10px;
        left: -16px;
        position: relative;
      }
      .price{
        font-family: ProximaNova-Bold;
        color:white;
        font-size: 4em;
        text-align: center;
        position: relative;
        margin-bottom: 0px;
        .currency{
          font-size: 14px;
          position: absolute;
          top:7px;
          @media screen and (max-width: $break-small) {
            font-size: 10px;
          }
        }
        @media screen and (max-width: $break-small) {
          font-size: 3em;
        }
      }
      .miniprice{
        font-family: ProximaNova-Bold;
        color:white;
        font-size: 1.5em;
        text-align: center;
        position: relative;
        top: -14px;
        .currency{
          font-size: 8px;
          position: absolute;
          top:6px;
          padding-left: 2px;
        }
      }
      button {
        background-color: #0098d8;
        color: white;
        font-family: ProximaNova-Regular;
        font-size: 0.9em;
        border: none;
        outline: none;
        width: 300px;
        padding-top: 24px;
        padding-bottom: 24px;
        letter-spacing: 4px;
        border-radius: 4px;
        margin: 0 auto;
        display: block;
        box-shadow: 0px 0px 7px 0px #b8d6f7;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        @media screen and (max-width: $break-xsmall) {
          width: 220px;
          top: -10px;
          position: relative;
          font-size: 0.7em;
        }
        &:hover{
          background-color: #008fcc;
          box-shadow: 0px 0px 7px 0px #82b6f1;
        }
      }
    }
    .plus{
      position: absolute;
      top: 50%;
      left: -12px;
      @media screen and (max-width: $break-mobile) {
        display: none;
      }
    }
    .special-plus{
      @media screen and (max-width: $break-medium) {
        display: none;
      }
    }
    .faq-link{
      color:#00a7f0;
      &:hover{
        color:#00a7f0;
      }
    }
  }
`;
