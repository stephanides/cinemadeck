import css from 'styled-jsx/css';

export default css`
  .main-footer-container {
    bottom: 0;
    position: absolute;
    width: 100%;

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
}
`;
