import { css, keyframes } from 'styled-components';

export default ({ time = '1.2s' } = {}) => css`
  animation: ${keyFadeIn} ${time} cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const keyFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
