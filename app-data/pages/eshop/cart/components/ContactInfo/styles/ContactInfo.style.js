import css from 'styled-jsx/css';

export default css`
  .contact-info-container {
    z-index: 2;
    padding-right: 3rem;
    @media(max-width: 992px){
      padding-right: 0rem;
    }
    h3 {
      font-family: ProximaNova-Bold;
    }
  }
`;
