import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

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
  &:hover {
    transform: scale(1.07);
    box-shadow: 0 1px 10px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const Subtitle = styled.h4`
  padding: 20px 0 0px 20px;
  margin: 0;
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const CardWrapper = styled.div`
  margin: 5px;
`;

export const Description = styled.p`
  padding: 0px 10px 10px 20px;
  margin: 0;
  color: #5f6368;
`;

export const Image = styled(GatsbyImage)`
  height: 90px;
  box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
    transform: scale(1.1);
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
