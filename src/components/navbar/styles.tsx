import styled from 'styled-components';

export const Header = styled.header`
  box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  left: 0;
  right: 0;
  z-index: 5;
`;

export const Nav = styled.nav`
  grid-template-columns: minmax(auto, 800px) repeat(5, auto);
  align-items: center;
  grid-gap: 10px;
  padding: 10px 10px 6px 10px;
  display: grid;

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

export const SectDiv = styled.div`
  padding: 10px 0;
`;

export const Image = styled.img`
  width: 35px;
  height: 35px;
`;

export const Select = styled.select`
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
`;

export const LogoDiv = styled.div`
  @media screen and (max-width: 479px) {
    display: none;
  }
`;
