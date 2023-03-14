import { css } from 'styled-components';

export const moveUpDown = () => {
  return css`
    @keyframes moveUpDown {
      50% {
        transform: translateY(-50px);
      }
      100% {
        transform: translateY(-100px);
      }
    }
  `;
};

export const bounce = () => {
  return css`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  `;
};
