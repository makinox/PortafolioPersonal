import { css, keyframes } from 'styled-components';

export default ({ time = '0.6s' } = {}) => css`
  animation: ${keyRotate} ${time} cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const keyRotate = keyframes`  
  0% {
    transform: rotate(-360deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    opacity: 1;
  }

`;
