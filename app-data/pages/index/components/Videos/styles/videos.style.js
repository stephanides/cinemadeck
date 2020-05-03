import css from 'styled-jsx/css';

export default css.global`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .videos{
      background-image: url("/static/images/steps/background.jpg");
    .margin-bottom-60{
      margin-bottom: 60px;
      @media screen and (max-width: $break-mobile) {
        margin-bottom: 0px;
      }
    }
    .BrainhubCarousel__arrows{
      background-image: url("/static/images/steps/background.jpg");
      background-color: transparent;
      outline: none !important;
    }
    h2{
      padding-top: 120px;
      font-family: ProximaNova-SemiBold;
      font-size: 2em;
      color:white; 
      letter-spacing: 8px;
      text-transform: uppercase;
      font-size: 1.8em;
      @media screen and (max-width: $break-mobile) {
        padding-top: 80px;
        font-size: 1.5em;
      }
      @media screen and (max-width: $break-xsmall) {
        padding-top: 80px;
        font-size: 1.2em;
      }
    }
    .text-p{
      font-family: 'Open Sans', sans-serif;
      font-size: 1.3em;
      color: white;
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
      width: 100%;
      margin: 1rem;
      @media screen and (max-width: $break-xsmall) {
        padding-top: 40px;
      }
      .video{
        height: 315px;
        box-shadow: 0px 3px 14px 0px #252424;
        @media screen and (max-width: $break-mobile) {
          height: 200px;
          background-size: cover;
        }
      }
    }
  }
`;
