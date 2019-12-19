import css from 'styled-jsx/css';

export default css.global/* css */`
$break-xsmall: 400px;
$break-small: 576px;
$break-mobile: 768px;
$break-medium: 992px;
$break-large: 1200px;
$break-xarge: 1400px;

  #codenotfound{
    position:relative;
    top:200px;
    h3{
      font-family: 'Open Sans', sans-serif;
      font-size: 2.25em;
      color: #d4d9e2;
      font-weight: 300;
      width: 600px;
      line-height: 54px;
      @media screen and (max-width: $break-xarge) {
        font-size: 2.15em;
      }
      @media screen and (max-width: $break-large) {
        width: 460px;
        font-size: 1.8em;
      }
      @media screen and (max-width: $break-medium) {
        width: 550px;
        font-size: 1.8em;
      }
      @media screen and (max-width: $break-mobile) {
        width: unset;
        font-size: 1.5em;
      }
      @media screen and (max-width: $break-xsmall) {
        font-size: 1.2em;
      }
      strong{
        color:white;
        font-weight: 600;
      }
    }
    .homelink{
      background-color: #0098d8;
      color: white;
      font-family: ProximaNova-Regular;
      font-size: 1em;
      border: none;
      outline: none;
      padding-left: 36px;
      padding-right: 36px;
      padding-top: 26px;
      padding-bottom: 26px;
      letter-spacing: 3px;
      border-radius: 4px;
      margin: 0 auto;
      display: block;
      margin-top: 56px;
      box-shadow: 0px 0px 8px 0px #3ac5ff;
      z-index: 2;
      position: relative;
      width: 320px;
      text-decoration: none;
      text-align: center;
      margin-bottom:12rem;
      @media screen and (max-width: 1500px) {
        margin-top: 100px;
      }
      @media screen and (max-width: $break-large) {
        margin-top: 140px;
      }
      @media screen and (max-width: $break-mobile) {
        max-width: 85%;
        margin-top: 80px;
      }

      &:hover{
        background-color: #008fcc;
        box-shadow: 0px 0px 7px 0px #82b6f1;
      }
    }
  }
`;
