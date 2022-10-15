import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
        scroll-behavior: smooth;
      }

      * {
        margin: 0;
        font-family: 'Share Tech Mono', sans-serif;
        box-sizing: border-box;
      }
      p {
        line-height: 1.8;
        font-size: 1.1rem;
      }
      a {
        font-size: 1.1rem;
        text-decoration: none
      }

      @keyframes slideDown {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(0);
        }
      }





@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;
