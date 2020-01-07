import css from 'styled-jsx/css';

export default css.global`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .package{
    padding-top: 120px;
    padding-bottom: 120px;
    @media screen and (max-width: $break-mobile) {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    .bottom-card{
      margin-top:4rem;
      @media screen and (max-width: $break-large) {
        margin-top:1rem;
      }
    }
    .text-p{
      font-family: 'Open Sans', sans-serif;
      font-size: 1.3em;
      color: #2f3438;
      font-weight: 400;
      text-align: center;
      padding-bottom: 2rem;
      padding: 2rem;
      padding-top: 0;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.2em;
        padding-top: 60px;
      }
      @media screen and (max-width: $break-xsmall) {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
    h2{
      color:#2f3438;
      font-family: ProximaNova-Bold;
      text-transform: uppercase;
      letter-spacing: 8px;
      padding-bottom: 60px;
      text-align: center;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.5em;
        padding-bottom: 0px;
      }
    }
    h6{
      font-family: ProximaNova-Regular;
      color: rgb(47, 52, 56);
      text-transform: uppercase;
      letter-spacing: 8px;
      padding-top: 20px;
    }
    img{
      margin: 0 auto;
      display: block;
      width: 60%;
      @media screen and (max-width: $break-large) {
        width: 50%;
      }
    }
    .unique-img{
      left: -12px;
      position: relative;
    }
    .presets-img{
      width: 80%;
      position: relative;
      @media screen and (max-width: $break-mobile) {
        padding-top: 40px;
        padding-bottom: 40px;
        width: 60%;
      }
    }
    .text-header{
      font-family: ProximaNova-Bold;
      color: rgb(47, 52, 56);
      text-transform: uppercase;
      text-align: center;
      padding-left: 30px;
      padding-right: 30px;
    }
    .text-text{
      font-family: ProximaNova-Regular;
      color: rgb(47, 52, 56);
      text-align: center;
      padding-left: 30px;
      padding-right: 30px;
    }
    .img-holder{
      height: 360px;
      position: relative;
      display: flex;
      align-items: center;
      @media screen and (max-width: $break-mobile) {
        display: block;
        height: unset;
      }
    }
    .pdf-icon{
      position: absolute;
      margin: 0;
      width: unset;
      top: 50%;
      left: calc(50% - 10px);
      transform: translate(-50%, -50%);
    }
    .unique-pdf-icon{
      position: absolute;
      margin: 0;
      width: unset;
      top: 50%;
      left: calc(50% - 20px);
      transform: translate(-50%, -50%);
    }
    .img-right{
      position: relative;
      left: 26px;
      @media screen and (max-width: $break-xsmall) {
        left: 20px;
      }
    }
    .buy-package-holder{
      width: 380px;
      height: 220px;
      background-color: #f8f8f8;
      display: block;
      margin: 0 auto;
      position: relative;
      margin-top: 40px;
      @media screen and (max-width: $break-xsmall) {
        width: 260px;
        height: 240px;
      }
      .text-complete{
        font-family: ProximaNova-Regular;
        color:black;
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
        color:black;
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
        color:black;
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
      a, button {
        background-color: #0098d8;;
        box-shadow: 0px 0px 7px 0px #b8d6f7;
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
  }
`;
