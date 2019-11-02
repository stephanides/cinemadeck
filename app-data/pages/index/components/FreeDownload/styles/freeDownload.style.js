import css from 'styled-jsx/css';

export default css.global/* css */`
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
    a{
      cursor:pointer;
      text-decoration:underline !important;
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
      bottom: -100px;
      right: -400px;
      pointer-events:none;
      @media screen and (max-width: $break-xarge) {
        right: -460px;
      }
      @media screen and (max-width: $break-large) {
        right: -660px;
      }
      @media screen and (max-width: $break-medium) {
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

      &.free-download-file {
        animation: shadow-pulse 1s 3;
      }
    }
    .show{
      height: 120px;
    }
    .hide{
      height: 0px;
    }
  
    .text-holder{
      width: 460px;
      transition: height 0.3s ease-out;
      overflow:hidden;
      .input-group{
        padding-top: 40px;
        padding-bottom:10px;
        .form-control{
          border-radius: .35rem;
          height: calc(1.5em + .75rem + 6px);
        }
        input{
          box-shadow: 0px 0px 6px 3px #dee2e6;
        }
      }
      .input-group-text{
        background-color:transparent;
        border:none;
        padding-left: 2px;
        span{
          padding-left:8px;
        }
      }
    } 
    .borders{
      max-width:1600px !important;
      margin:0 auto;
      position:relative;
    }

    @keyframes shadow-pulse {
      0% {
        box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
      }
      100% {
        box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);
      }
    }
  }
`;
