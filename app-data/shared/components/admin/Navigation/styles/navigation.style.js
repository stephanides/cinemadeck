import css from 'styled-jsx/css';

export default css`
  .navigation-container {
    ul {
      li {
        font-size: .9rem;

        &:first-child {
          button {
            background: transparent;
            border: 0 none;
            color: #000;
            font-weight: 600;
            padding: 0;
            outline: none;
          }
        }
        &:nth-child(2) {
          position: relative;

          & > div {
            &:first-child {
              display: block;
              position: relative;
            }
            &:last-child {
              display: none;
              left: -50%;
              position: absolute;
              padding-top: 8px;
              transform: translateX(20%);

              & > div {
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: .25rem;
                padding: .5rem .75rem;
                position: relative;

                &:before {
                  content: '';
                  height: 0;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  border-bottom: 10px solid #ccc;
                  left: 50%;
                  position: absolute;
                  width: 0;
                  top: -10px;
                  transform: translateX(-50%);
                }
                &:after {
                  content: '';
                  height: 0;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  border-bottom: 10px solid #fff;
                  left: 50%;
                  position: absolute;
                  width: 0;
                  top: -9px;
                  transform: translateX(-50%);
                }

                ul {
                  margin: 0;
                  padding: 0;
                  list-style: none;
                }
              }
            }
          }
        }
        &:hover {
          & > div {
            &:last-child {
              display: block;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
      }

      &.list-unstyled {
        z-index: 10;
      }
    }
  }
`;
