import css from 'styled-jsx/css';

export default css.global/* css */`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile: 768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  #header{
    background-color: #1c1c20;
    height: 920px;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 1500px) {
      height: 800px;
    }
    @media screen and (max-width: $break-xarge) {
      height: 720px;
    }
    @media screen and (max-width: $break-medium) {
      height: unset;
      margin: 0;
      padding-top: 100px;
    }
    .container-fluid{
      @media screen and (max-width: $break-medium) {
        padding: 0;
      }
    }
    img{
        position: absolute;
        right: 0px;
        right: -450px;
        width: 1440px;
        @media screen and (max-width: 1500px) {
          width: 1000px;
          right: -150px;
        }
        @media screen and (max-width: $break-xarge) {
          width: 900px;
        }
        @media screen and (max-width: $break-large) {
          width: 700px;
          top: 80px;
        }
        @media screen and (max-width: $break-medium) {
          width: 100%;
          position: relative;
          right: 0px;
          top: 0px;
        }
      }
      .text_holder{
        padding-top: 195px;
        padding-left: 35px;
        z-index: 2;
        position: relative;
        @media screen and (max-width: 1500px) {
          padding-left: 90px;
        }
        @media screen and (max-width: $break-xarge) {
          padding-left: 100px;
        }
        @media screen and (max-width: $break-medium) {
          padding-top: 0;
          margin-top: 60px;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
      p{
        font-family: ProximaNova-Regular;
        color:white;
        font-size: 0.95em;
        text-transform: uppercase;
        letter-spacing: 2px;
        @media screen and (max-width: $break-xarge) {
          font-size: 0.8em;
        }
        @media screen and (max-width: $break-large) {
          font-size: 0.75em;
        }
        @media screen and (max-width: $break-medium) {
          font-size: 1em;
        }
        @media screen and (max-width: $break-mobile) {
          margin-top: 20px;
        }
        @media screen and (max-width: $break-xsmall) {
          font-size: 0.7em;
        }
      }
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
      button{
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
        
        @media screen and (max-width: 1500px) {
          margin-top: 100px;
        }
        @media screen and (max-width: $break-large) {
          margin-top: 140px;
        }
        @media screen and (max-width: $break-mobile) {
          max-width: 85%;
        }

        &:hover{
          background-color: #008fcc;
          box-shadow: 0px 0px 7px 0px #82b6f1;
        }
      }
  }
`;
