import style from 'styled-jsx/css';

export default style`
  .gp {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    &.hide {
      display: none;
    }
    &.show {
      display: block;
    }

    .gp-wrapper {
      align-items: center;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: relative;

      .gp-content {
        background-color: #fff;
        padding: .9rem .75rem;

        img {
          display: block;
          margin: 0 auto .5rem;
        }
      }
    }
    .gp-bg {
      background-color: rgba(0, 0, 0, .75);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
