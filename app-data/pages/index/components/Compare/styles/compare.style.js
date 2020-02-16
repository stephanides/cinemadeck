import css from 'styled-jsx/css';

export default css.global`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .compare{
      background-color:#f8f8f8;
    h2{
      padding-top: 80px;
      font-family: ProximaNova-Bold;
      font-size: 2em;
      color:#2f3438; 
      letter-spacing: 8px;
      text-transform: uppercase;
      font-size: 2rem;
      @media screen and (max-width: $break-mobile) {
        padding-top: 60px;
        font-size: 1.5em;
      }
      @media screen and (max-width: $break-xsmall) {
        padding-top: 60px;
        font-size: 1.2em;
      }
    }
    .text-p{
      font-family: 'Open Sans', sans-serif;
      font-size: 1.3em;
      color: black;
      font-weight: 400;
      text-align: center;
      padding-bottom: 2rem;
      margin-top: 2rem;
      margin-bottom: 0rem;
      @media screen and (max-width: $break-mobile) {
        font-size: 1em;
        padding-top: 60px;
        margin:0;
      }
      @media screen and (max-width: $break-xsmall) {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
    .video-holder{
      padding-top: 60px;
      @media screen and (max-width: $break-xsmall) {
        padding-top: 40px;
      }
      .video{
        background-image: url("/static/images/videos/video.jpg");
        height: 315px;
        box-shadow: 0px 3px 14px 0px #252424;
        @media screen and (max-width: $break-mobile) {
          height: 200px;
          background-size: cover;
        }
      }
    }
    .miniImg{
      margin: 0 auto;
      display: block;
      width: 240px;
      margin-top:1rem;
      @media screen and (max-width: $break-medium) {
        width: 80%;
      }
      @media screen and (max-width: $break-small) {
        width: 60%;
      }
    }
    .imgHolder{
      align-items: center;
    }
    .start{
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        color:white;
        margin-bottom: 0;
        margin-top: 1rem;
        @media screen and (max-width: $break-medium) {
          font-size: 2rem;
        }
        @media screen and (max-width: $break-small) {
          font-size: 1.2rem;
        }
      }
    }
    .later{
      @media screen and (max-width: $break-medium) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p{
        display:none;
        @media screen and (max-width: $break-medium) {
          color:white;
          margin-bottom: 0;
          margin-top: 1rem;
          display:block;
          font-size: 2rem;
        }
        @media screen and (max-width: $break-small) {
          font-size: 1.2rem;
        }
      }
    }
    .end{
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        color:white;
        margin-top: 1rem;
        margin-bottom: 0;
        @media screen and (max-width: $break-medium) {
          font-size: 2rem;
        }
        @media screen and (max-width: $break-small) {
          font-size: 1.2rem;
        }
      }
    }
    .imgWrapper{
      background-image: url("/static/images/steps/background.jpg");
      padding-top:2rem;
      padding-bottom: 2rem;
    }
    .divider{
      height:80px;
      border-left: dashed 2px #5d5e60;
      position: absolute;
      top: 38%;
      @media screen and (max-width: $break-medium) {
        display:none;
      }
    }
    .right{
      right: .5rem;
    }
    .left{
      left: .5rem;
    }
    .desktop{
      display:block;
      @media screen and (max-width: $break-medium) {
        display:none;
      }
    }
    .mobile{
      display:none;
      @media screen and (max-width: $break-medium) {
        display:block;
      }
    }
  }
`;
