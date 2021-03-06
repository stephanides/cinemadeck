import css from 'styled-jsx/css';

export default css.global/* css */`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .cardcomposition{
    padding-top: 120px;
    overflow: hidden;
    @media screen and (max-width: $break-mobile) {
      padding-top: 80px;
    }
    .text-p{
      font-family: 'Open Sans', sans-serif;
      font-size: 1.3em;
      color: #2f3438;
      font-weight: 400;
      text-align: center;
      padding-bottom: 2rem;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.2em;
        padding-top: 60px;
      }
      @media screen and (max-width: $break-xsmall) {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
    h2{
      color:#2f3438;
      font-family: ProximaNova-Bold;
      text-transform: uppercase;
      letter-spacing: 8px;
      padding-bottom: 60px;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.5em;
        padding-bottom: 0px;
      }
      @media screen and (max-width: $break-xsmall) {
        font-size: 1.2em;
        letter-spacing: 4px;
      }
    }
    .holder{
      padding-top: 100px;
      position: relative;
      @media screen and (max-width: $break-medium) {
        padding-top: 40px;
      }
      img{
        margin: 0 auto;
        display: block;
        @media screen and (max-width: $break-xsmall) {
          width:100%;
        }
      }
      .flip-card{
        background-color: transparent;
        width: 376px;
        height: 628px;
        display: block;
        margin: 0 auto;
        perspective: 1000px;
        @media screen and (max-width: $break-xsmall) {
          width:280px;
          height: 468px;
        }
      }
      .flip-card-holder{
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }
      .flip-card-holder-flipped{
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        transform: rotateY(180deg);
      }
      .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-perspective: 0;
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0,0,0);
    visibility:visible;
    backface-visibility: hidden;
        box-shadow: 1px 1px 60px 4px #888888;
        border-radius: 16px;
      }
      .flip-card-front {
        color: black;
      }
      .flip-card-back {
        color: white;
        transform: rotateY(180deg);
      }
      .fade-out-left{
        display: none;
        opacity: 0;
        left: -200px !important;
      }
      .fade-out-right{
        display: none;
        opacity: 0;
        right: -200px !important;
      }
      .card-text-holder-desktop{
        @media screen and (max-width: $break-medium) {
          display: none;
        }
        .left-card1-text, .right-card1-text,.left-card2-text, .right-card2-text{
          display: block;
          position: absolute;
          top: 0;
          -webkit-transition: all 1s; /* Safari prior 6.1 */
          transition: all 1s;
          img{
            @media screen and (max-width: $break-large) {
              width: 150px;
            }
          }
          .text-item{
            position: relative;
            display: flex;
            align-items: center;
            .text{
              width: 200px;
            }
            h6{
              font-family: ProximaNova-Bold;
              color:black;
              text-transform: uppercase;
              margin-bottom: 2px;
              font-size: 1em;
            }
            p{
              color:#8e97a0;
              font-family: ProximaNova-Regular;
              font-size: 0.95em;
            }
          }
        }
        .left-card1-text{
          position: absolute;
          top: 0;
          left:0;
          .text-1{
            top:65px;
            img{
              position: absolute;
              left: 230px;
              top:16px;
              @media screen and (max-width: $break-large) {
                left: 176px;
                top: 28px;
              }
            }
          }
          .text-2{
            top:100px;
            img{
              position: absolute;
              top:0px;
              left:230px
            }
            .text{
              width: 220px !important;
            }
          }
          .text-3{
            top:140px;
            img{
              position: absolute;
              left: 260px;
              top: 30px;
            }
            .text{
              width: 240px !important;
            }
          }
          .text-3-en{
            top:140px;
            img{
              position: absolute;
              left: 260px;
              top: 10px;
            }
            .text{
              width: 240px !important;
            }
          }
          .text-4{
            top:180px;
            img{
              position: absolute;
              top: -42px;
              left: 250px;
            }
            .text{
              width: 240px !important;
              margin-top:20px;
            }
          }
        }
        .right-card1-text{
          right: 0;
          .text-5{
            top:50px;
            img{
              position: absolute;
              left: -240px;
              top: 32px;
              @media screen and (max-width: $break-large) {
                left: -156px;
                top: 45px;
              }
            }
            .text{
              width: 225px !important;
            }
          }
          .text-6{
            top:90px;
            img{
              position: absolute;
              left: -206px;
              top: -12px;
              @media screen and (max-width: $break-large) {
                left: -112px;
                top: -12px;
              }
            }
            .text{
              width: 225px !important;
            }
          }
          .text-7{
            top:276px;
            img{
              position: absolute;
              left: -192px;
              top: 6px;
              @media screen and (max-width: $break-large) {
                left: -138px;
                top: 15px;
              }
            }
            .text{
              width: 225px !important;
              margin-top: 30px;
            }
          }
        }
        .left-card2-text{
          position: absolute;
          top: 0;
          left:0;
          .text-8{
            top:60px;
            img{
              position: absolute;
              left: 240px;
              top: 20px;
              @media screen and (max-width: $break-large) {
                width: 200px;
                top: 48px;
              }
            }
            .text{
              width: 225px !important;
            }
          }
          .text-9{
            top:380px;
            position: absolute;
            img{
              position: absolute;
              left: 240px;
              top: -42px;
            }
            .text{
              width: 216px !important;
            }
          }
        }
        .right-card2-text{
          right: 0;
          .text-10{
            top:140px;
            img{
              position: absolute;
              left: -200px;
              top: 20px;
              @media screen and (max-width: $break-large) {
                left: -160px;
              }
            }
            .text{
              width: 225px !important;
            }
          }
          .text-11{
            top:360px;
            img{
              position: absolute;
              left: -258px;
              top: -6px;
              @media screen and (max-width: $break-large) {
                left: -175px;
              }
            }
            .text{
              width: 225px !important;
            }
          }
          .text-11-en{
            top:380px;
            img{
              position: absolute;
              left: -258px;
              top: 0px;
              @media screen and (max-width: $break-large) {
                left: -175px;
              }
            }
            .text{
              width: 225px !important;
            }
          }
        }
      }
      .card-text-holder-mobile{
        display: none;
        @media screen and (max-width: $break-medium) {
          display: block;
          margin-top: 60px;
          height: 400px;
        }
        .left-card1-text, .right-card1-text,.left-card2-text, .right-card2-text{
          position: absolute;
          -webkit-transition: all 1s; /* Safari prior 6.1 */
          transition: all 1s;
          display: block;
        }
        .left-card1-text{
          left: 50px;
          @media screen and (max-width: $break-mobile) {
            left: 0;
          }
          @media screen and (max-width: $break-xsmall) {
            width: 50%;
          }
        }
        .right-card1-text{
          right: 50px;
          @media screen and (max-width: $break-mobile) {
            right: 0;
          }
          @media screen and (max-width: $break-xsmall) {
            width: 50%;
          }
        }
        .left-card2-text{
          left: 50px;
          @media screen and (max-width: $break-mobile) {
            left: 0;
          }
          @media screen and (max-width: $break-xsmall) {
            width: 50%;
          }
        }
        .right-card2-text{
          right: 50px;
          @media screen and (max-width: $break-mobile) {
            right: 0;
          }
          @media screen and (max-width: $break-xsmall) {
            width: 50%;
          }
        }
        .text-item{
          position: relative;
          display: flex;
          align-items: center;
          .text{
            width: 180px;
            @media screen and (max-width: $break-xsmall) {
              width: 100%;
            }
          }
          h6{
            font-family: ProximaNova-Bold;
            color:black;
            text-transform: uppercase;
            margin-bottom: 2px;
            font-size: 1em;
            @media screen and (max-width: $break-mobile) {
              font-size: 0.9em;
            }
          }
          p{
            color:#8e97a0;
            font-family: ProximaNova-Regular;
            font-size: 0.95em;
            @media screen and (max-width: $break-mobile) {
              font-size: 0.8em;
            }
          }
        }
      }
    }
    button{
      display: flex;
      text-transform: uppercase;
      border: none;
      background: no-repeat;
      justify-content: space-between;
      align-items: center;
      color:#37baf1;
      font-family: ProximaNova-Bold;
      outline:none;
      margin: 0 auto;
      margin-top: 60px;
      margin-bottom: 60px;
      @media screen and (max-width: $break-mobile) {
        margin-top: 0;
      }
      .flip-image{
        width: 56px;
        height: 20px;
        background-image: url("/static/images/composition/flip.png");
        background-repeat: no-repeat;
      }
      &:hover{
        color:#29abe2;
        .flip-image{
          background-image: url("/static/images/composition/fliphover.png") !important;
        }
      }
    }
    .slideshow{
      width: 100%;
    }
  }
`;
