import css from 'styled-jsx/css';

export default css.global`
  $break-xsmall: 400px;
  $break-small: 576px;
  $break-mobile:768px;
  $break-medium: 992px;
  $break-large: 1200px;
  $break-xarge: 1400px;

  .compare{
      background-color:#f8f8f8;
    .compare-head{
      background-color: #1c1c20;
      padding-bottom: 60px;
      padding-top: 80px;
      @media(max-width: 576px){
        padding-top: 40px;
      }
      .subtitle{
        font-family: 'Caveat', cursive;
        color: #43a7de;
        font-size: 1.38rem;
        @media(max-width: 576px){
          text-align: center;
        }
      }
      .lower-size{
        align-items: center;
        justify-content: center;
        display: flex;
      }
      .compare-img{
        width: 95%;
        margin: 0 auto;
        display: block;
      }
      .text-small{
        color: white;
        font-size: 1.2rem;
        text-align: left;
        font-family: ProximaNova-Regular;
        @media(max-width: 576px){
          text-align: center;
        }
        strong{
          font-weight: 400;
          color: #43a7de;
        }
      }
    }
    .mapWrapper{
      background-color: #fafafa;
      padding-bottom: 2rem;
      img{
        width: 100%;
      }
      h4{
        font-size: 2rem;
        color: black;
        text-transform: uppercase;
        font-family: ProximaNova-Bold;
        padding-top: 4rem;
        padding-bottom: 3rem;
        letter-spacing: 2px;
        @media(max-width: 768px){
          padding-top: 2rem;
        }
      }
      .text-small{
        color: black;
        font-size: 1.3rem;
        text-align: center;
        font-family: ProximaNova-Regular;
        margin-top: 2rem;
        margin-bottom: 4rem;
        @media screen and (max-width: $break-mobile) {
          font-size: 1.2em;
        }
        strong{
          font-weight: 600;
          color: #43a7de;
        }
      }
    }
    .imgWrapper{
      img{
        width: 100%;
      }
      h4{
        font-size: 2rem;
        color: black;
        text-transform: uppercase;
        font-family: ProximaNova-Bold;
        letter-spacing: 2px;
      }
      h6{
        font-size: 1.8rem;
        color: black;
        text-transform: uppercase;
        font-family: ProximaNova-Bold;
      }
      .text-small{
        color: black;
        font-size: 1.3rem;
        text-align: center;
        font-family: ProximaNova-Regular;
        margin-top: 2rem;
        margin-bottom: 4rem;
        @media screen and (max-width: $break-mobile) {
          font-size: 1.2em;
        }
        strong{
          font-weight: 600;
          color: #43a7de;
        }
      }
    }
    h2{
      font-family: ProximaNova-Bold;
      font-size: 2.5em;
      color: white; 
      letter-spacing: 2px;
      text-transform: uppercase;
      @media(max-width: 576px){
        text-align: center !important;
      }
      @media screen and (max-width: $break-mobile) {
        padding-top: 60px;
        font-size: 1.5em;
      }
      @media screen and (max-width: $break-xsmall) {
        padding-top: 60px;
        font-size: 1.2em;
      }
    }
    .text-p{
      font-family: 'Open Sans', sans-serif;
      font-size: 1.3em;
      color: black;
      font-weight: 400;
      text-align: center;
      padding-bottom: 2rem;
      margin-top: 2rem;
      margin-bottom: 0rem;
      @media screen and (max-width: $break-mobile) {
        font-size: 1em;
        padding-top: 60px;
        margin:0;
      }
      @media screen and (max-width: $break-xsmall) {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
    .video-holder{
      padding-top: 60px;
      @media screen and (max-width: $break-xsmall) {
        padding-top: 40px;
      }
      .video{
        background-image: url("/static/images/videos/video.jpg");
        height: 315px;
        box-shadow: 0px 3px 14px 0px #252424;
        @media screen and (max-width: $break-mobile) {
          height: 200px;
          background-size: cover;
        }
      }
    }
    .miniImg{
      margin: 0 auto;
      display: block;
      width: 240px;
      margin-top:1rem;
      @media screen and (max-width: $break-medium) {
        width: 80%;
      }
      @media screen and (max-width: $break-small) {
        width: 60%;
      }
    }
    .imgHolder{
      align-items: center;
    }
    .start{
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        color:white;
        margin-bottom: 0;
        margin-top: 1rem;
        @media screen and (max-width: $break-medium) {
          font-size: 2rem;
        }
        @media screen and (max-width: $break-small) {
          font-size: 1.2rem;
        }
      }
    }
    .later{
      @media screen and (max-width: $break-medium) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p{
        display:none;
        @media screen and (max-width: $break-medium) {
          color:white;
          margin-bottom: 0;
          margin-top: 1rem;
          display:block;
          font-size: 2rem;
        }
        @media screen and (max-width: $break-small) {
          font-size: 1.2rem;
        }
      }
    }
    .end{
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        color:white;
        margin-top: 1rem;
        margin-bottom: 0;
        @media screen and (max-width: $break-medium) {
          font-size: 2rem;
        }
        @media screen and (max-width: $break-small) {
          font-size: 1.2rem;
        }
      }
    }
    .imgWrapper{
      background-color: white;
      padding-top:4rem;
      padding-bottom: 6rem;
      @media(max-width: 768px){
        padding-bottom: 2rem;
      }
    }
    .divider{
      height:80px;
      border-left: dashed 2px #5d5e60;
      position: absolute;
      top: 38%;
      @media screen and (max-width: $break-medium) {
        display:none;
      }
    }
    .right{
      right: .5rem;
    }
    .left{
      left: .5rem;
    }
    .desktop{
      display:block;
      @media screen and (max-width: $break-medium) {
        display:none;
      }
    }
    .mobile{
      display:none;
      @media screen and (max-width: $break-medium) {
        display:block;
      }
    }
  }
`;
