import styled, { css } from 'styled-components';

export const pageDefault = css`
  width: 100vw;
  height: 100vh;
`;

export const customAnimation = css`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes pop-up {
    0% {
      opacity: 0;
      transform: translateY(25px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
