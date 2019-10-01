import css from 'styled-jsx/css';

export default css.global/* css */`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;
  
  *{
    font-family: ProximaNova-Regular;
  }

  #terms{
    padding-top:140px;
    h1{
      font-family: ProximaNova-Bold;
      padding-bottom:60px;
    }
    h6{
      font-family: ProximaNova-Bold;
    }
    p{
      margin-bottom:0;
      text-align: justify;
    }
  }
`;
