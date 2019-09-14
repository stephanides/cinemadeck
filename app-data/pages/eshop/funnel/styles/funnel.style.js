import css from 'styled-jsx/css';

export default css`
  @font-face {
    font-family: ProximaNova-Bold;
    src: url("/static/fonts/ProximaNova-Bold.otf");
    font-display: swap;
  }
  @font-face {
    font-family: ProximaNova-SemiBold;
    src: url("/static/fonts/ProximaNova-Semibold.otf");
    font-display: swap;
  }

  .funnel {
    .funnel-heading-container {
      margin-top: 90px;
    
      h2 {
        font-family: 'ProximaNova-Bold';
        letter-spacing: .25rem;
        color: black;
      }
    }
  }
`;
