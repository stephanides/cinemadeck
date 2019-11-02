import css from 'styled-jsx/css';

export default css`
$transition-time:5s;
$break-xsmall: 400px;
$break-small: 576px;
$break-mobile: 768px;
$break-medium: 992px;
$break-large: 1200px;
$break-xarge: 1400px;

  .main-footer-container {
    bottom: 0;
    // position: absolute;
    overflow: hidden;
    width: 100%;
  
    @media screen and (max-width: $break-mobile) {
      position: relative;
    }

    ul {
      &.footer-list {
        padding: 0;
        margin: 0 35px 50px 35px;
        list-style: none;

        li {
          color: #bec3c7;
          font-size: .75rem;

          &:after {
            content: '|';
            margin: 0 .5rem;
          }
          &:nth-child(3) {
            margin-right: auto;
            
            &:after {
              content: '';
              margin: 0;
            }
          }
          &:last-child {
            &:after {
              content: '';
              margin-right: 0;
            }
          }
        }
      }
    }
    a{
      color:#bec3c7;
      text-decoration:none;
      &:hover{
        color:#00a7f0;
      }
    }
    .list_holder{
      @media screen and (max-width: $break-medium) {
        display:block !important;
      }
    }
    .footer-list{
      @media screen and (max-width: $break-small) {
        display: block !important;
        text-align: center;
      }
    }
    p {
      &.text-right {
        color: #bec3c7;
        font-size: .75rem;  
        margin: 0 35px 1rem;

        @media screen and (max-width: $break-mobile) {
          text-align: center!important;
        }
      }
    }
    .company-info {
      ul {
        list-style: none;
        padding: .5rem 2rem;

        li {
          color: #bec3c7;
          font-size: .75rem;

          &.text-right {
            @media screen and (max-width: $break-mobile) {
              text-align: center!important;
            }
          }
        }
      }
    }
    .logos {
      display: flex;
      justify-content: space-around;
      
      img {
        object-fit: contain;
        height: 25px;
      }
    }
  }
`;
