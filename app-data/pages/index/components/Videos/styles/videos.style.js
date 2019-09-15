import css from 'styled-jsx/css';

export default css`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .videos{
      background-image: url("/static/images/steps/background.jpg");
      padding-bottom: 100px;
    h2{
      padding-top: 100px;
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
  }
`;
