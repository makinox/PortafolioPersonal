import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

interface ItemProps {
  readonly fixed?: string;
}

export const Title = styled.div`
  text-align: center;
  padding: 4%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5% 0 2% 0;
`;

export const Card = styled.div`
  display: block;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  margin: 20px;
  /* &:hover {
    transform: scale(1.07);
    box-shadow: 0 1px 10px 0px rgba(0, 0, 0, 0.3);
  } */
`;

export const Subtitle = styled.h4`
  padding: 20px 0 0px 20px;
  margin: 0;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 5px 20px;
`;

export const Description = styled.p`
  padding: 0px 10px 10px 20px;
  margin: 0;
  color: #5f6368;
`;

export const Image = styled(GatsbyImage)<ItemProps>`
  height: auto;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: all 0.3s;
  /* &:hover {
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
    transform: scale(1.1);
  } */
`;

export const MoreContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MoreButton = styled.span`
  cursor: pointer;
  font-size: 35px;
  color: #022ed8;
`;

export const CardInfo = styled.div`
  position: relative;
`;

export const CardInfoContainer = styled.div`
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  position: absolute;
  border-radius: 5px;
  /* top: 30%;
  bottom: 30%; */
  /* left: 30%;
  right: 30%; */
  min-width: 300px;
  display: none;
  width: auto;
  z-index: 6;

  &:hover {
    display: block;
  }
`;

export const CardInfoButton = styled.div`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #022ed8;
  display: flex;
  margin: 10px 0;

  &:hover + ${CardInfoContainer} {
    display: block;
  }

  &:active + ${CardInfoContainer} {
    display: block;
  }

  &:focus + ${CardInfoContainer} {
    display: block;
  }
`;

export const CardInfoList = styled.ul`
  margin: 0 20px;
`;

export const CardInfoShow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const CardInfoFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0px 20px 20px 20px;
`;

export const CardInfoFooterLink = styled.a`
  color: #022ed8;
  text-decoration: none;
`;
