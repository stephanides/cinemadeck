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

  .unique{
    padding-top: 80px;
    padding-bottom: 80px;
    h2{
      color:#2f3438;
      font-family: ProximaNova-Bold;
      text-transform: uppercase;
      letter-spacing: 8px;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.5em;
      }
      @media screen and (max-width: $break-xsmall) {
        font-size: 1.2em;
      }
    }
    img{
      display: block;
      margin: 0 auto;
      
      @media screen and (max-width: $break-medium) {
        padding-top: 20px;
        width: 100%;
      }
    }
    .text-p{
      font-family: 'Open Sans', sans-serif;
      font-size: 1.5em;
      color: #4b4f53;
      font-weight: 400;
      letter-spacing: 1px;
      padding-top: 100px;
      padding-left: 20px;
      padding-right: 20px;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.2em;
        padding-top: 60px;
      }
      @media screen and (max-width: $break-xsmall) {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
    .items_holder{
      margin-top: 100px;
      p{
        font-family:  ProximaNova-Regular;
        color: #d2d4d5;
        font-size: 1.2em;
      }
      h3{
        text-transform: uppercase;
        font-family: ProximaNova-Bold;
        letter-spacing: 1px;
        font-size: 1.5em;
      }
      .icon_text{
        font-family: 'Open Sans', sans-serif;
        color: #666a6d;
        font-weight: 300;
        font-size: 1em;
        padding-top: 50px;
        padding-right: 40px;
        @media screen and (max-width: $break-mobile) {
          padding-top: 20px;
        }
        strong{
          color:black;
        }
      }
      .number_arrow{
        [class*="icono"] {
          position: relative;
          display: inline-block;
          vertical-align: middle;
          color: #d2d4d5;
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
    .iconHolder{
      height: 80px;
      display: flex;
      align-items: center;
      .icon{
        margin: 0;
        @media screen and (max-width: $break-medium) {
          width: unset;
        }
      }
    }
    
  }
`;
