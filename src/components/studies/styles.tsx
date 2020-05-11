import styled from 'styled-components';

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
