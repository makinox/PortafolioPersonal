import { css, keyframes } from 'styled-components';

export default ({ time = '0.5s' } = {}) => css`
  animation: ${keySlideBottom} ${time} cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const keySlideBottom = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100px);
  }
`;
