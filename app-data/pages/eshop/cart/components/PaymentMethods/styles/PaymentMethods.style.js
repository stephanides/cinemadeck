import css from 'styled-jsx/css';

export default css`
  .payment-methods-container {
    padding-right: 3rem;
    @media(max-width: 992px){
      padding-right: 0rem;
    }
    .card{
      box-shadow: 0px 0px 20px 0px rgba(169, 169, 169, 0.2);
      border-radius: 4px;
      border: none;
    }
    h3 {
      font-family: ProximaNova-Bold;
    }
    .logo-line {
      display: flex;
      align-items: center;
      height: 57px;
      
      img {
        float: left;
        margin-right: .5rem;
        max-height: 55px;
      }
    }
  }
`;
