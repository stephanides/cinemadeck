import css from 'styled-jsx/css';

export default css`
  $transition-time:5s;
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .about {
    background-color: #1c1c20;
    padding-top: 100px;
    position: relative;
    z-index: 2;
    padding-bottom: 160px;
    @media screen and (max-width: $break-mobile) {
      padding-bottom: 80px;
    }
    @media screen and (max-width: $break-xsmall) {
      padding-top: 80px;
    }
    h1{
      font-family: ProximaNova-SemiBold;
      font-size: 2em;
      color:white; 
      letter-spacing: 8px;
      @media screen and (max-width: $break-mobile) {
        font-size: 1.5em;
      }
      @media screen and (max-width: $break-xsmall) {
        font-size: 1.2em;
        letter-spacing: 4px;
      }
    }
    img{
      display: block;
      margin: 0 auto;
      margin-top: 60px;
      width: 100%;
      max-width: 1095px;
    }
    p{
      font-family: 'Open Sans', sans-serif;
      font-size: 1.5em;
      color: #b1b6be;
      font-weight: 400;
      @media screen and (max-width: $break-mobile) {
        font-size: 1em;
      }
      strong{
        color:white;
        font-weight: 500;
      }
    }
    .mt-text{
      margin-top: 140px;
      @media screen and (max-width: $break-mobile) {
        margin-top: 80px;
      }
    }
    .coverflow-container {
      box-reflect:below 0px -webkit-linear-gradient(top, rgba(0,0,0,0) 60%,rgba(0,0,0,0.1) 100%);
    }
    
    label {
      color:#999;
      display:inline-block;
      padding:10px;
      border:1px solid black;
      cursor:pointer;
      background:#252525;
      text-shadow:1px 1px 2px rgba(0,0,0,0.9);
      &:hover {
        color:#FFF;
      }
    }
    
    .coverflow-list {
      width:100%;
      margin-top: 100px;
      .coverflow-item {
        display:inline-block;
        background:#414141;
        margin:0 -20px;
        position:relative;
        box-shadow:0 1px 8px rgba(0,0,0,0.9);
        .album-cover {
          display:block;
          height:150px;
          margin:0;
          img {
            width:240px;
            opacity:1;
            margin-top: 0;
          }
        }
        .album-name {
          text-align:center;
          display:block;
          color:#444;
        }
        label {
          padding:0;
          border:none;
          display:block;
          text-shadow:none;
        }
      }
    }
    /* Now apply 3D transforms (never done this before!) */
    .coverflow-list {
      transform: perspective(900px);
      transform-style: preserve-3d;
      perspective-origin: 100% 30%;
      .coverflow-item {
        transition: all $transition-time ease;
        background:#212121;
        transform: rotateY(25deg);
      }
    }
    
    input[type="radio"] {
      display:none;
      &:checked {
        + .coverflow-item {
          transform: rotateY( 0deg ) scale(1.3);
          margin:0 auto;
          background:#313131;
          transition:all $transition-time ease;
          img { opacity:1; }
          figcaption { color:#FFFFFF; }
          ~ .coverflow-item {
            transform:rotateY(-25deg);
            transition: all $transition-time ease;
            background:#515151;
          }
        }
      }
    }
    /*@keyframes cover-forward {
    0% { transform: rotateY( 45deg ); }
    50% { transform: rotateY( 0deg ) translate3d( 60px,0,0 ) scale3d(1.2,1.2,1.2); z-index:999; }
    100% { transform: rotateY( 45deg ) translate3d( 0,0,0 ) scale3d(1,1,1); }
  }

  @keyframes cover-return {
    0% { transform: rotateY( 45deg ); }
    100% { transform: rotateY( 0deg ) translate3d( 150px,0,0 ) scale3d(1.2,1.2,1.2); }
  }*/
}
`;
