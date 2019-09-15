import css from 'styled-jsx/css';

export default css.global/* css */`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;
  
  .slideshow {
    background-image: url(/static/images/steps/background.jpg);
    padding-bottom: 120px; 
    .image-gallery{
      max-width: 1400px;
      display: block;
      margin: 0 auto;
    }
    
    h2{
      color: white;
      font-family: ProximaNova-Bold;
      text-transform: uppercase;
      letter-spacing: 8px;
      padding-top: 80px;
      padding-bottom: 60px;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.5em;
        padding-bottom: 40px;
        padding-top: 0px;
      }
      @media screen and (max-width: $break-xsmall) {
        font-size: 1.2em;
        padding-bottom: 40px;
        padding-top: 0px;
      }
    }
  }
`;
