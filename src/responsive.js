import { css } from 'styled-components';

export const mobile = (props) => {
  console.log(css(props));
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  console.log(css(props));
  return css`
    @media only screen and (max-width: 960px) {
      ${props}
    }
  `;
};
