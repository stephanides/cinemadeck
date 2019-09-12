import css from 'styled-jsx/css';

export default css`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .faq-heading {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    transition: text-indent 0.2s;
    color: rgb(255, 255, 255);
    text-indent: 20px;
    font-size: 1.2em;
    padding-bottom: 40px;
    @media screen and (max-width: $break-mobile) {
      font-size: 1em;
      text-indent: 0px;
      width: 80%;
      padding-left: 20px;
    }
  }

  .faq-text {
    font-family: 'Open Sans', sans-serif;
      color: #b1b6bd;
      font-weight: 400;
      font-size: 1em;
      padding-right: 40px;
      padding-left: 20px;
  }

  .faq {
    margin: 0 auto;
    border-radius: 4px;
    position: relative;
    margin-top: 32px;
  }
  .faq label {
    display: block;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    height: 56px;
    padding-top:1px;
  }

  .faq input[type="checkbox"] {
    display: none;
  }

  .faq .faq-arrow {
    width: 12px;
    height: 12px;
    transition: -webkit-transform 0.8s;
    transition: transform 0.8s;
    transition: transform 0.8s, -webkit-transform 0.8s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-top: 4px solid rgb(255, 255, 255);
      border-right: 4px solid rgb(255, 255, 255);
    float: right;
    position: relative;
    top: -60px;
    right: 27px;
    -webkit-transform: rotate(315deg);
            transform: rotate(315deg);
    @media screen and (max-width: $break-mobile) {
      top: -76px;
    }
  }

  .faq input[type="checkbox"]:checked + label > .faq-arrow {
    transition: -webkit-transform 0.8s;
    transition: transform 0.8s;
    transition: transform 0.8s, -webkit-transform 0.8s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    -webkit-transform: rotate(-225deg);
            transform: rotate(-225deg);
  }
  .faq input[type="checkbox"]:checked + label {
    display: block;
    background: transparent;
    color: #4f7351;
    height: 180px;
    transition: height 0.8s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-bottom: 1px solid grey;
    @media screen and (max-width: $break-mobile) {
      height: 380px;
    }
    @media screen and (max-width: $break-xsmall) {
      height: 490px;
    }
  }

  .faq input[type='checkbox']:not(:checked) + label {
    display: block;
    transition: height 0.8s;
    height: 60px;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-bottom: 1px solid grey;
    @media screen and (max-width: $break-mobile) {
      height: 80px;
    }
  }
`;
