import css from 'styled-jsx/css';

export default css`
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .author{
    background-color: #0f141c;
    padding-top: 120px;
    padding-bottom: 60px;
    .author-image{
      display: block;
      margin: 0 auto;
      @media screen and (max-width: $break-mobile) {
        width: 100%;
      }
    }
    h5{
      font-family: ProximaNova-Bold;
      color:white;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 6px;
      padding-top: 60px;
      font-size: 2em;
    }
    h6{
      color: #565760;
      font-family: ProximaNova-Regular;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 8px;
      padding-top: 10px;
    }
    .text-holder{
      padding-top: 48px;
      padding-bottom: 60px;
      padding-right: 20%;
      padding-left: 20%;
      @media screen and (max-width: $break-mobile) {
        padding-right: 20px;
        padding-left: 20px;
      }
      p{
        font-family: "Open Sans", "sans-serif";
        color: #a0a4ad;
        font-weight: 400;
      }
    }
    .social-networks{
      display: flex;
      justify-content: center;
    }
    .email{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 10px;
      a{
        padding-left: 10px;
        font-family: "Open Sans", "sans-serif";
        color: rgb(213, 217, 226);
        font-size: 0.85em;
        &:hover{
          color:#4cc7fa;
        }
      }
    }
  }
`;
