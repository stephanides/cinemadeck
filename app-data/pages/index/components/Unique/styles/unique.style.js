import css from 'styled-jsx/css';

export default css.global/* css */`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .unique{
    padding-top: 120px;
    padding-bottom: 80px;
    .unique-image-holder{
      position: relative;
      top:60px;
      @media screen and (max-width: $break-mobile) {
        top:0px;
      }
      .buble-holder{
        position:absolute;
        @media screen and (max-width: $break-mobile) {
          display:none;
        }
        p{
          background-color: grey;
          color: white;
          padding-left: 32px;
          border-radius: 50px;
          padding-right: 32px;
          padding-top: 10px;
          padding-bottom: 10px;
          z-index: 2;
          position: relative;
          font-family: 'Open Sans', sans-serif;
          @media screen and (max-width: $break-medium) {
            font-size: 0.7em;
            padding-left: 22px;
            padding-right: 22px;
          }
        }
        img{
          position:relative;
          z-index: 1;
          @media screen and (max-width: $break-medium) {
            width:unset;
          }
        }
      }
      .buble1{
        top: 236px;
        left: 84px;
        @media screen and (max-width: $break-large) {
          left:6px;
        }
        @media screen and (max-width: $break-medium) {
          top:208px;
        }
        img{
          top: -35px;
          left: 46px;
          @media screen and (max-width: $break-medium) {
            top: -54px;
            left: 34px;
          }
        }
        p{
          width: 260px;
          @media screen and (max-width: $break-medium) {
            width: 184px;
          }
        }
      }
      .buble2{
        top: 580px;
        left: 134px;
        @media screen and (max-width: $break-large) {
          left:42px;
        }
        @media screen and (max-width: $break-medium) {
          left:52px;
          top: 487px;
        }
        img{
          top: -108px;
          transform: rotateZ(280deg);
          left: 26px;
          @media screen and (max-width: $break-medium) {
            left:-16px;
          }
        }
        p{
          width: 242px;
          @media screen and (max-width: $break-medium) {
            width: 180px;
          }
        }
      }
      .buble3{
        top: 410px;
        right: 100px;
        @media screen and (max-width: $break-large) {
          right:1px;
        }
        @media screen and (max-width: $break-medium) {
          top: 334px;
        }
        img{
          top: -124px;
          transform: rotateZ(188deg);
          right: 100px;
          @media screen and (max-width: $break-medium) {
            top: -89px;
            right: 70px;
          }
        }
        p{
          width: 312px;
          @media screen and (max-width: $break-medium) {
            width:226px;
          }
        }
      }
      .buble4{
        top: 100px;
        left: 80px;
        @media screen and (max-width: $break-large) {
          left:1px;
          top:80px;
          @media screen and (max-width: $break-medium) {
            top: 112px;
            left:12px;
          }
        }
        img{
          top: -75px;
          left: 94px;
          transform: rotateZ(-28deg);
          @media screen and (max-width: $break-medium) {
            top: -88px;
            left: 42px;
          }
        }
        p{
          width: 200px;
          @media screen and (max-width: $break-medium) {
            width: 136px;
          }
        }
        .unique-text{
          width:166px;
          @media screen and (max-width: $break-medium) {
            width: 116px;
          }
        }
      }
    }
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
