import css from 'styled-jsx/css';

export default css`
  .order-success {
    .order-success-head {
      min-height: 250px;
      flex-direction: column;
  
      h1, h2 {
        font-family: ProximaNova-Bold;
        letter-spacing: .25rem;
        width: 100%;
      }
      h1 {
        font-size: 1.35rem;
        margin-top: 6rem;
      }
      h2 {
        font-size: 2.25rem;
      }
    }
    .order-success-content {
      margin-bottom: 10rem;

      button {
        background-color: #37baf1;
        border-color: transparent;
        border-radius: .25rem;
        color: #fff;
        font-size: .85rem;
        height: 70px;
        min-width: 265px;
        letter-spacing: .15rem;
        padding: 0 28px !important;
  
        &:hover {
          background-color: #0098d8;
        }
      }
    }
    .main-footer-container {
      position: static!important;
    }
  }
`;
