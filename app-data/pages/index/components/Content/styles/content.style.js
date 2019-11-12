import css from 'styled-jsx/css';

export default css.global/* css */`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .content{
    background-image: url("/static/images/content/background.jpg");
    height: 1020px;
    background-size: cover;
    background-position: 90% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #0d0d0d;
    @media (max-width: 1666px){
      background-size: cover;
    }
    @media screen and (max-width: $break-xarge) {
      background-position: 25% 50%;
    }
    @media screen and (min-width: 1400px) {
      background-position: 50% 30%;
    }
    @media screen and (max-width: $break-mobile) {
      background-image: url("/static/images/steps/background.png");
      background-repeat: repeat;
      background-size: unset;
      height: unset;
      padding-bottom: 100px;
    }
    h2{
      padding-top: 100px;
      font-family: ProximaNova-SemiBold;
      font-size: 2em;
      color:white; 
      letter-spacing: 8px;
      text-transform: uppercase;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.5em;
      }
      @media screen and (max-width: $break-xsmall) {
        font-size: 1.2em;
        letter-spacing: 4px;
        padding-top: 80px;
      }
    }
    .holder{
      padding-top: 100px;
      display: flex;
      justify-content: space-between;
      max-width:1600px;
      margin:0 auto;
      @media screen and (max-width: $break-xarge) {
        padding-top: 60px;
      }
      @media screen and (max-width: $break-mobile) {
        padding-top: 40px;
      }
      @media screen and (max-width: $break-xsmall) {
        padding-top: 0px;
      }
      .left-items{
        padding-left: 150px;
        @media screen and (max-width: $break-large) {
          padding-left: 60px;
        }
        @media screen and (max-width: $break-medium) {
          padding-left: 60px;
        }
        @media screen and (max-width: $break-mobile) {
          width: 100%;
          padding-left: 20px;
        }
      }
      .right-items{
        padding-right: 30px;
        padding-top: 36px;
        display: none;
        @media screen and (max-width: $break-medium) {
          display: none;
        }
        .right-item{
          display: flex;
          align-items: center;
          background-color: #656260;
          margin-top: 6px;
          padding-left: 26px;
          padding-right: 26px;
          padding-top: 14px;
          padding-bottom: 14px;
          border-radius: 36px;
          p{
            color: #d9d8d7;
            margin: 0;
            font-family: ProximaNova-Bold;
            letter-spacing: 1px;
            padding-left: 14px;
          }
        }
      }
    }
    .content-button{
      background-color: #0098d8;
      color: white;
      font-family: ProximaNova-Regular;
      font-size: 1em;
      border: none;
      outline: none;
      width: 420px;
      padding-top: 20px;
      padding-bottom: 20px;
      letter-spacing: 2px;
      border-radius: 4px;
      margin: 0 auto;
      display: block;
      margin-top: 56px;
      box-shadow: 0px 0px 8px 0px #3ac5ff;
      margin-left: 0px;
      margin-top: 80px;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      @media screen and (max-width: $break-large) {
        margin-left: 60px;
      }
      @media screen and (max-width: $break-mobile) {
        width: unset;
        margin: 0 auto;
        margin-top: 60px;
      }
      &:hover{
        background-color: #008fcc;
        box-shadow: 0px 0px 7px 0px #82b6f1;
      }
    }
  }
`;
