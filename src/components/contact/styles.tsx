import styled from 'styled-components';

export const Banner = styled.div`
  background: black;
  background-color: white;
  box-shadow: 1px 5px 5px 0 rgba(0, 0, 0, 0.6);
  padding: 20px 0;
`;

export const BannerTitle = styled.h2`
  text-align: center;
`;

export const Subtitle = styled.h3`
  padding: 20px 0;
  color: #000;
  font-size: 25px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 300px));
  justify-content: center;
  padding: 200px 0px;
  /* box-shadow: inset 0 0 200px 0 rgba(0, 0, 0, 0.6); */
`;

export const Item = styled.div`
  justify-content: center;
  text-align: center;
  padding-bottom: 40px;
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
  font-size: 20px;

  &:hover {
    background-color: #170aff;
  }

  &:active {
    background-color: #0a6be8;
    box-shadow: 3px 3px 10px 0px rgba(2, 46, 214, 0.3);
  }
`;

export const Button = styled.a`
  cursor: pointer;
  width: 30px;
  height: 22px;
  border-radius: 50%;
  padding: 15px;
  margin: 10px 10px;
  transition: all 0.2s;
  display: inline-block;
  text-decoration: none;
  color: white;
  border: 1px #022ed8 solid;
  background-color: #022ed8;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
  font-size: 20px;

  &:hover {
    transform: scale(1.3);
  }
`;

export const ContactMedia = styled.div`
  display: flex;
  justify-content: center;
`;
