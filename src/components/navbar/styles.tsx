import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: minmax(auto, 800px) repeat(5, auto);
  grid-gap: 10px;
  align-items: center;

  @media screen and (max-width: 479px) {
    grid-template-columns: repeat(5, auto);
  }
`;

export const Anchor = styled.a`
  display: inline;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: rgb(0, 0, 0);
  }
`;

export const Image = styled.img`
  width: 35px;
`;

export const Select = styled.select`
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
`;

export const LogoDiv = styled.div`
  @media screen and (max-width: 479px) {
    display: none;
  }
`;
