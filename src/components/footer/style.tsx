import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
`;

export const Title = styled.h2`
  color: #8b8b8b;
  opacity: 0.4;
  font-size: 20px;
`;

export const Anchor = styled.a`
  color: #8b8b8b;
  text-decoration: none;

  &:hover {
    color: #b8b8b8;
  }

  &:active {
    color: white;
  }
`;
