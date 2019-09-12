import css from 'styled-jsx/css';

export default css`
  @font-face {
    font-family: ProximaNova-Regular;
    src: url("/static/fonts/ProximaNova-Regular.otf");
  }
  @font-face {
    font-family: ProximaNova-Bold;
    src: url("/static/fonts/ProximaNova-Bold.otf");
  }
  @font-face {
    font-family: ProximaNova-SemiBold;
    src: url("/static/fonts/ProximaNova-Semibold.otf");
  }
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;
  
  .freedownload{
    position: relative;
    background-image: url("/static/images/freedownload/background.png");
    padding-bottom: 100px;
    overflow: hidden;
    h2{
      font-family: ProximaNova-Bold;
      text-transform: uppercase;
      font-size: 2.6em;
      padding-top: 100px;
      letter-spacing: 10px;
      color:#26292c;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.8em;
        letter-spacing: 6px;
      }
      @media screen and (max-width: $break-xsmall) {
        font-size: 1.5em;
        letter-spacing: 6px;
      }
    }
    p{
      font-family: 'Open Sans', sans-serif;
      font-size: 1em;
      color: #26292c;
      font-weight: 500;
      margin: 0;
    }
    .freetext{
      padding-top: 40px;
      @media screen and (max-width: $break-mobile) {
        padding-top: 40px;
      }
      @media screen and (max-width: $break-xsmall) {
        padding-top: 0px;
      }
    }
    .check-holder{
      padding-top: 30px;
    }
    .free-image{
      position: absolute;
      bottom: 0;
      right: 0;
      @media screen and (max-width: $break-xarge) {
        right: -30px;
      }
      @media screen and (max-width: $break-large) {
        right: -232px;
      }
      @media screen and (max-width: $break-mobile) {
        display: none;
      }
    }
    button{
      background-color: #0098d8;
      color: white;
      font-family: ProximaNova-Regular;
      font-size: 1em;
      border: none;
      outline: none;
      width: 300px;
      padding-top: 20px;
      padding-bottom: 20px;
      letter-spacing: 2px;
      border-radius: 4px;
      margin: 0 auto;
      display: block;
      margin-top: 56px;
      box-shadow: 0px 0px 8px 0px #bdbdbd;
      margin-left: 0px;
      margin-top: 60px;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      @media screen and (max-width: $break-xsmall) {
        width: 260px;
      }
      &:hover{
        background-color: #008fcc;
        box-shadow: 0px 0px 7px 0px #82b6f1;
      }
    } 
  }
  .modal{
    .modal-dialog{
      max-width: 80%;
    }
    .modal-content{
      height: 95vh;
    }
    .modal-footer{
      justify-content: space-between;
      border:none;
    }
    .modal-button{
      background-color: #0098d8;
      color: white;
      font-family: ProximaNova-Regular;
      font-size: 0.8em;
      border: none;
      outline: none;
      padding-top: 20px;
      padding-bottom: 20px;
      letter-spacing: 2px;
      border-radius: 4px;
      margin: 0 auto;
      display: block;
      margin-top: 56px;
      box-shadow: 0px 0px 8px 0px #bdbdbd;
      margin-top: 60px;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      &:hover{
        background-color: #008fcc;
        box-shadow: 0px 0px 7px 0px #82b6f1;
      }
    }
    .free-image{
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .text-holder{
      width: 300px;
    }
  }
`;
