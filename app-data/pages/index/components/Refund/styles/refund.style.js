import css from 'styled-jsx/css';

export default css`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;


  .refund{
    padding-bottom: 100px;
    padding-top: 100px;
    @media screen and (max-width: $break-mobile) {
      padding-bottom: 60px;
      padding-top: 60px;
    }
    img{
      display: block;
      margin: 0 auto;
      @media screen and (max-width: $break-mobile) {
        width: 100%;
      }
    }
    h2{
      font-family: ProximaNova-Bold;
      font-size: 2em;
      color: rgb(47, 52, 56);
      letter-spacing: 4px;
      text-transform: uppercase;
      text-align: center;
      margin: 0;
      padding: 0;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.6em;
      }
    }
    h6{
      font-family: ProximaNova-Bold;
      color: rgb(78, 83, 87);
      text-transform: uppercase;
      text-align: center;
      padding-top: 12px;
      letter-spacing: 6px;
    }
    .text-holder{
      padding-top: 60px;
      padding-left: 80px;
      padding-right: 80px;
      @media screen and (max-width: $break-mobile) {
        padding-left: 0px;
        padding-right: 0px;
      }
      p{
        font-family: 'Open Sans', sans-serif;
        color: rgb(47, 52, 56);
        text-align: center;
      }
    }
    a, button{
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
      margin-top: 56px;
      box-shadow: 0px 0px 15px 0px #b8d6f7;
      margin-top: 80px;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      @media screen and (max-width: $break-mobile) {
        width: 260px;
      }
      &:hover{
        background-color: #008fcc;
        box-shadow: 0px 0px 15px 0px #82b6f1;
      }
    }
  }
`;
