import css from 'styled-jsx/css';

export default css`
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-extraLarge: 1400px;

  .custom-container{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    position:relative;

    @media screen and (min-width: $break-extraLarge) {
      max-width: 1340px;
    }
    @media screen and (max-width: $break-large) {
      max-width: 1140px;
    }
    @media screen and (max-width: $break-medium) {
      max-width: 932px;
    }
    @media screen and (max-width: $break-mobile) {
      max-width: 708px;
    }
    @media screen and (max-width: $break-small) {
      max-width: 520px;
    }
  }
`;
