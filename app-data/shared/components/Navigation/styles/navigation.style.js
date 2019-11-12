import css from 'styled-jsx/css';

export default css.global/* css */`
  $break-small: 576px;
  $break-mobile: 768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .scroll_background {
    background-image: url(/static/images/steps/background.png);
  }
  .navbar-toggler-icon {
    /* background-image: url(data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E); */
    outline: none !important;
  }
  .navbar-toggler {
    outline: none !important;
    border: 0;
  }
  .navbar-cart-info-holder {
    position: absolute;
    right: 20px;
    top: 25px;

    .navbar-cart-info {
      background-color: #37baf1;
      border-radius: 50%;
      color: #fff;
      display: none;
      font-size: .8rem;
      height: 25px;
      opacity: 0;
      right: 0;
      position: absolute;
      top: 0;
      width: 25px;
  
      &.show-pulse {
        opacity: 1;
        animation: shadow-pulse 1s 3;
        transition: opacity .5s;
      }
      @media screen and (max-width: $break-mobile) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .navigation_holder {
    padding-left: 60px;
    padding-right: 60px;
    max-width: 1600px;
    margin: 0 auto;

    @media screen and (max-width: $break-xarge) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media screen and (max-width: $break-large) {
      padding-left: 0px;
      padding-right: 0px;
    }
    
  }
  .navbar {
    &.fixed-top {
      z-index: 999!important;
    }
    padding: 27px 0;
    margin-bottom: 10px;
    @media screen and (max-width: $break-xarge) {
      padding-left: 50px;
      padding-right: 50px;
    }
    @media screen and (max-width: $break-mobile) {
      padding-left: 20px;
      padding-right: 20px;
      background-color: #171717;
    }

    .navbar-brand {
      padding: 0;
      img{
        width: 180px;
      }
    }

    .navbar-nav {
      @media screen and (max-width: $break-mobile) {
        height: 100vh;
        padding-top: 100px;
      }
      @media screen and (max-width: 576px) {
        padding-top: 50px;
      }
      li {
        display: flex;
        align-items: center;
        @media screen and (max-width: $break-mobile) {
          align-items: center;
          justify-content: center;
          margin-top: 20px;
        }

        a {
          font-family: ProximaNova-Regular;
          color:white;
          font-size: 0.8em;
          padding: 0 .5rem;

          @media screen and (max-width: $break-mobile) {
            font-size: 1.5em;
          }
          @media screen and (max-width: 576px) {
            font-size: 1.3em;
          }
    
          &:hover {
            color: #00a7f0;
            text-decoration: none;
          }
        }
    
        button {
          background-color: transparent;
          border: 0 none;
          color:white;
          font-family: ProximaNova-Regular;
          font-size: 0.8em;
          padding: 0 .5rem;
          outline: none;

          @media screen and (max-width: $break-mobile) {
            font-size: 1.5em;
          }
          &:hover {
            color: #00a7f0;
          }
          &.btn-link {
            &:hover {
              color: #00a7f0;
              text-decoration: none;
            }
          }
        }
    
        .button-link {
          background-color: #0098d8;
          border-radius: 2px;
          margin-right: .5rem;
          padding-right: 28px !important;
          padding-left: 28px !important;
          padding-top: 12px;
          padding-bottom: 12px;
          letter-spacing:3px;
          text-decoration: none;
          box-shadow: 0px 0px 6px 0px #3ac5ff;

          &:hover {
            background-color: #008fcc;
            color:white;
          }
        }
    
        &:nth-child(2) {
          position: relative;
          padding: 0 0 0 1rem;
          margin: 0 0 0 1rem;

          @media screen and (max-width: $break-mobile) {
            margin: 0;
            padding: 0;
            margin-top: 20px;
          }
    
          &::before {
            content: '|';
            color: #aeb4b8;
            position: absolute;
            top: .5rem;
            left: 0;
          }

          @media screen and (max-width: $break-mobile) {
            &::before {
              display: none;
            }
          }
        }
      }

      .shopping-cart {
        color: #000;
        font-size: 2.5rem;

        .proceed-to-cart {
          background-color: #37baf1;
          border-radius: 50%;
          color: #fff;
          height: 30px;
          width: 30px;

          span {
            font-size: .9rem;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            .chevron-icon {
              position: absolute;
              top: -9px;
              left: -3px;
              transform: translate(-50%, -50%);
    
              &:before {
                content: '';
                display: block;
                width: 0;
                height: 0;
                border-top: 8px solid transparent;
                border-left: 8px solid #fff;
                border-bottom: 8px solid transparent;
                position: absolute;
                top: 0;
                left: 0;
              }
              &:after {
                content: '';
                display: block;
                width: 0;
                height: 0;
                border-top: 6px solid transparent;
                border-left: 6px solid #37baf1;
                border-bottom: 6px solid transparent;
                position: absolute;
                top: 2px;
                left: 0;
              }
            }
          }
        }
      }
      .cart-content{
        @media screen and (max-width: 576px) {
          margin-top:0px !important;
        }
      }
    
      &.not-homepage {
        li {
          &.move {
            transition: margin-right 2s;

            &.move-left {
              margin-right: 350px;

              @media screen and (max-width: $break-mobile) {
                margin-right: 0!important;
              }
            }
          }
          &.cart-content {
            background-color: #f8f8f8;
            display: flex;
            flex-direction: column;
            font-size: .85rem;
            align-items: start;
            justify-items: center;
            justify-content: center;
            min-height: 80px;
            padding: .5rem 1rem;
            position: absolute;
            right: 125px;
            top: -7px;
            transform: translateY(-399px);
            width: 300px;
            
            @media screen and (max-width: $break-mobile) {
              margin-top: 2.5rem!important;
              position: static;
              right: 0;
              top: 0;
              width: 100%;
            }

            div {
              color: #8e979f;
              margin-bottom: .5rem;

              span {
                @media screen and (max-width: $break-mobile) {
                  font-size: .7rem;
                }
              }
            }
            &.move {
              transition: transform 2s;

              &.move-top {
                transform: translateY(-25px);
              }
            }
          }
          a {
            color: #aeb4b8;
    
            &:hover {
              color: #00a7f0;
            }
            &.button-link {
              color: #fff;
    
              &:hover {
                color: #fff;
              }
            }

            &.shopping-cart {
              color: #000;
              font-size: 2.5rem;

              .proceed-to-cart {
                background-color: #37baf1;
                border-radius: 50%;
                color: #fff;
                height: 30px;
                width: 30px;

                span {
                  font-size: .9rem;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);

                  .chevron-icon {
                    position: absolute;
                    top: -9px;
                    left: -3px;
                    transform: translate(-50%, -50%);
          
                    &:before {
                      content: '';
                      display: block;
                      width: 0;
                      height: 0;
                      border-top: 8px solid transparent;
                      border-left: 8px solid #fff;
                      border-bottom: 8px solid transparent;
                      position: absolute;
                      top: 0;
                      left: 0;
                    }
                    &:after {
                      content: '';
                      display: block;
                      width: 0;
                      height: 0;
                      border-top: 6px solid transparent;
                      border-left: 6px solid #37baf1;
                      border-bottom: 6px solid transparent;
                      position: absolute;
                      top: 2px;
                      left: 0;
                    }
                  }
                }
              }
            }
          }
    
          button {
            color: #aeb4b8;
              
            &:hover {
              color:#00a7f0;
            }
          }
        }
      }
    }
  }
  .navbar-lighter{
    .navbar-toggler-icon{
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }
  }

  @keyframes shadow-pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(55, 186, 241, 0.2);
    }
    100% {
      box-shadow: 0 0 0 35px rgba(55, 186, 241, 0);
    }
  }
`;
