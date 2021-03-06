import css from 'styled-jsx/css';

export default css.global/* css */`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .steps{
      background-image: url("/static/images/steps/background.jpg");
      padding-bottom: 100px;
    h2{
      padding-top: 100px;
      font-family: ProximaNova-SemiBold;
      font-size: 2em;
      color:white; 
      letter-spacing: 8px;
      text-transform: uppercase;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.5em;
        letter-spacing: 4px;
      }
      @media screen and (max-width: $break-xsmall) {
        font-size: 1.2em;
        letter-spacing: 4px;
      }
    }
    img{
        width: 100%;
    }
    .image-holder{
      position: relative;
      margin-top: 100px;
      @media screen and (max-width: $break-mobile) {
        margin-top: 60px;
      }
      .img-text{
        color: #6cfc9f;
        text-transform: uppercase;
        font-family: ProximaNova-Bold;
        position: absolute;
      }
      .img-text-1{
        top: 86px;
        right: 160px;
        @media screen and (max-width: $break-large) {
          top: 68px;
          right: 120px;
        }
        @media screen and (max-width: $break-medium) {
          top: 52px;
          right: 74px;
          font-size: 0.8em;
        }
        @media screen and (max-width: $break-mobile) {
          top: 40px;
          right: 48px;
          font-size: 0.6em;
        }
        @media screen and (max-width: 560px) {
          top: 34px;
          right: 20px;
          font-size: 0.6em;
        }
        @media screen and (max-width: $break-xsmall) {
          top: 20px;
          right: -4px;
          font-size: 0.5em;
        }
      }
      .img-text-2{
        bottom: 40px;
        right: 180px;
        @media screen and (max-width: $break-large) {
          bottom: 28px;
          right: 120px;
        }
        @media screen and (max-width: $break-medium) {
          bottom: 16px;
          right: 80px;
          font-size: 0.8em;
        }
        @media screen and (max-width: $break-mobile) {
          bottom: 6px;
          right: 64px;
          font-size: 0.6em;
        }
        @media screen and (max-width: 560px) {
          bottom: 6px;
          right: 32px;
          font-size: 0.6em;
        }
        @media screen and (max-width: $break-xsmall) {
          top: 160px;
          right: 6px;
          font-size: 0.5em;
        }
      }
      .img-text-3{
        top: 308px;
        left: 60px;
        @media screen and (max-width: $break-large) {
          top: 256px;
          left: 56px;
        }
        @media screen and (max-width: $break-medium) {
          top: 190px;
          left: 22px;
          left: -7px;
        }
        @media screen and (max-width: $break-mobile) {
          font-size: 0.6em;
          top: 138px;
          left: 16px;
        }
        @media screen and (max-width: 560px) {
          top: 123px;
          left: 0px;
          font-size: 0.6em;
        }
        @media screen and (max-width: $break-xsmall) {
          top: 80px;
          left: -16px;
          font-size: 0.5em;
        }
      }
    }
    .items_holder{
      margin-top: 100px;
      p{
        font-family:  ProximaNova-Regular;
        color: #6cfc9f;
        font-size: 1.2em;
      }
      h3{
        text-transform: uppercase;
        font-family: ProximaNova-Bold;
        letter-spacing: 1px;
        font-size: 1.5em;
        color:white;
        padding-right: 30px;
      }
      .icon_text{
        font-family: 'Open Sans', sans-serif;
        color: #b1b6bd;
        font-weight: 400;
        font-size: 1em;
        padding-top: 50px;
        padding-right: 40px;
      }
      .icon_text_light{
        font-family: 'Open Sans', sans-serif;
        color: #b1b6bd;
        font-weight: 300;
        font-size: 0.9em;
        font-style: italic;
        padding-right: 40px;
      }
      .number_arrow{
        [class*="icono"] {
          position: relative;
          display: inline-block;
          vertical-align: middle;
          color: #6cfc9f;
          box-sizing: border-box;
          &:after, &:before {
            content: "";
            box-sizing: border-box;
          }
        }
        [class*="icono-arrow2"]{
          width: 0;
          height: 0;
          border-width: 6px;
          border-style: solid;
          border-bottom-color: transparent;
          border-left-color: transparent;
          margin: 10px;
          margin-left: 80px;
          top: -2px;  
          &:before{
            right: 0;
            top: -3px;
            position: absolute;
            height: 3px;
            box-shadow: inset 0 0 0 32px;
            transform: rotate(-45deg);
            width: 70px;
            transform-origin: right top;
          }
          &[class*="-left"]{
            transform: rotate(45deg);
            &[class*="-up"]{
              transform: none;
            }
            &[class*="-down"]{
              transform: rotate(90deg);
            }
          }
          &[class*="-right"]{
            transform: rotate(-135deg);
            &[class*="-up"]{
              transform: rotate(-90deg);
            }
            &[class*="-down"]{
              transform: rotate(180deg);
            }
          }
          &[class*="-up"]{
            transform: rotate(-45deg);
          }
          &[class*="-down"]{
            transform: rotate(135deg);
          }
        }
      }
    }
  }
`;
