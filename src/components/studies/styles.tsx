import styled, { css, keyframes } from 'styled-components';

interface ItemProps {
  readonly reverse?: boolean;
}

const whiteGradient = css`
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
`;

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(calc(-503px * 7))}
`;

const scrollAnimationReverse = keyframes`
	0% { transform: translateX(calc(-503px * 7))}
  100% { transform: translateX(0); }
`;

export const Card = styled.div`
  position: relative;
  display: block;
  padding: 4% 0;
  margin: 2% 0;
`;

export const CardBackground = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1fr);
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Anchor = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  border: 1px #022ed8 solid;
  padding: 10px 45px;
  background-color: #022ed8;
  border-radius: 20px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #170aff;
  }

  &:active {
    background-color: #0a6be8;
    box-shadow: 3px 3px 10px 0px rgba(2, 46, 214, 0.3);
  }
`;

export const Button = styled.div`
  display: grid;
  justify-content: center;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* visibility: hidden; */
  transition: opacity 0.3s, visibility 0s 0.3s;
`;

export const Title = styled.h2`
  padding: 10px;
  text-align: center;
`;

export const Subtitle = styled.h4`
  padding: 10px;
  text-align: center;
  text-shadow: 2px 2px #000000;
`;

export const Slider = styled.div`
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  margin: auto;

  &::before,
  &::after {
    position: absolute;
    ${whiteGradient};
    height: 450px;
    width: 150px;
    content: '';
    z-index: 2;
  }

  &::after {
    transform: rotateZ(180deg);
    right: 0;
    top: 0;
  }

  &::before {
    left: 0;
    top: 0;
  }
`;

export const SlideTrack = styled.div<ItemProps>`
  display: flex;
  width: calc(250px * 14);
  ${(props) =>
    props.reverse
      ? css`
          animation: ${scrollAnimationReverse} 12s linear infinite;
        `
      : css`
          animation: ${scrollAnimation} 12s linear infinite;
        `}
  &:hover {
    animation-play-state: paused;
  }
`;

export const Slide = styled.div`
  height: 190px;
  width: 250px;
`;

export const SlideImage = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 10px 5px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BadgeContainer = styled.div`
  justify-content: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  display: flex;
`;
export const SlideMiddle = styled.div`
  margin: 30px 0;
`;
