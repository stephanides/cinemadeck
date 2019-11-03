import css from 'styled-jsx/css';

export default css.global`
  $break-mobile: 768px;

  .footer-container {
    background-color: #f8f8f8;
    min-height: 390px;
    padding-top: 105px;
    flex-direction: column;
    align-items: center;

    .big-blue-anchor {
      background-color: #37baf1;
      border-radius: .25rem;
      color: #fff;
      font-size: .85rem;
      height: 70px;
      margin-bottom: 105px;
      letter-spacing: .15rem;
      max-width: 480px;
      width: 90%;

      &:hover {
        background-color: #0098d8;
        text-decoration: none;
      }
    }

    .main-footer-container {
      position: static!important;
    }
  }
`;
