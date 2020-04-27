import css from 'styled-jsx/css';

export default css.global`
  .contact-info-container {
    z-index: 2;
    padding-right: 3rem;
    @media(max-width: 992px){
      padding-right: 0rem;
    }
    h3 {
      font-family: ProximaNova-Bold;
    }
    .letter-spacing-2{
      letter-spacing: 2px;
    }
    .card{
      box-shadow: 0px 0px 20px 0px rgba(169, 169, 169, 0.2);
      border-radius: 4px;
      padding: 2rem 2rem 5rem 2rem !important;
      border: none;
      .form-group{
        .input-label{
          color: rgb(142, 151, 160);
          outline: none !important;
          box-shadow: none !important;
          border-bottom: 1px solid #cccdcd !important;
          &:focus{
            border-bottom: 2px solid #2f3438 !important;
            &::placeholder{
              color: #2f3438 !important;
            }
          }
          &::placeholder{
            color: rgb(142, 151, 160);
          }
        }
      }
    }
  }
`;
