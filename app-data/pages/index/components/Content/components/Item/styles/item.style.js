import css from 'styled-jsx/css';

export default css`
  @font-face {
    font-family: ProximaNova-Light;
    src: url("/static/fonts/ProximaNova-Light.otf");
    font-display: swap;
  }
  @font-face {
    font-family: ProximaNova-Bold;
    src: url("/static/fonts/ProximaNova-Bold.otf");
    font-display: swap;
  }
  @font-face {
    font-family: ProximaNova-SemiBold;
    src: url("/static/fonts/ProximaNova-Semibold.otf");
    font-display: swap;
  }

  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;


  .item{
    display: flex;
      align-items: center;
      justify-content: space-between;
      width: 480px;
      @media screen and (max-width: $break-mobile) {
        width: 100%;
      }
      img{
        @media screen and (max-width: $break-mobile) {
          width: 12%;
        }
      }
  }
  .itemText{
    padding-left: 40px;
    width: 400px;
    padding-top: 36px;
    @media screen and (max-width: $break-medium) {
      padding-left: 20px;
    }
    @media screen and (max-width: $break-mobile) {
      padding-left: 10px;
      width: 80%;
      padding-right: 20px;
    }
    h6{
      color: white;
      font-weight: bold;
      font-family: ProximaNova-Bold;
      text-transform: uppercase;
      font-size: 1em;
    }
    p{
      color:#d4d9e2;
      font-weight: 300;
      font-family: ProximaNova-Light;
    }
  }
`;
