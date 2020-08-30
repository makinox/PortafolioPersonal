import styled, { css } from 'styled-components';
import GatsbyImage from 'gatsby-image';

interface ItemProps {
  readonly fixed?: string;
  readonly view?: boolean;
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
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  transition: all 0.3s;
  height: min-content;
  border-radius: 5px;
  display: block;
  margin: 20px;

  &:hover {
    box-shadow: 0 1px 10px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const Subtitle = styled.h4`
  padding: 20px 0 0px 20px;
  text-align: center;
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
  text-align: center;
  color: #5f6368;
  margin: 0;
`;

export const Image = styled(GatsbyImage)<ItemProps>`
  height: auto;
  width: auto;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: all 0.3s;

  @media (max-width: 580px) {
    max-width: 200px;
    max-height: 150px;
  }

  &:hover {
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
  }
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

export const CardInfoContainer = styled.div<ItemProps>`
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  position: absolute;
  border-radius: 5px;
  min-width: 300px;
  display: none;
  width: auto;
  top: 30%;
  z-index: 6;

  &:hover {
    display: block;
  }

  @media (max-width: 580px) {
    left: 0%;
    right: 0%;
    max-width: 300px;
  }

  ${(props) => {
    const alignment = !props.view ? `left: 0;` : 'right: 0;';

    return css`
      ${alignment}
    `;
  }}
`;

export const CardInfoButton = styled.div`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #022ed8;
  display: flex;
  margin: 10px;

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

export const CardInfoList = styled.div`
  margin: 20px;
`;

export const CardInfoListItem = styled.div`
  display: inline-flex;
  padding: 0 5px;
  border-right: 1px solid #afafaf;

  &:last-of-type {
    border: none;
  }
`;

export const CardInfoShow = styled.div`
  display: flex;
  flex-direction: column;
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
