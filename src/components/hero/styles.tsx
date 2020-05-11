import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, auto);
  justify-content: center;
  padding: 15% 0;
`;

export const Item = styled.div`
  text-align: center;
  padding: 5% 0;

  @media (max-width: 575.98px) {
    padding: 20% 0;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
`;

export const Subtitle = styled.p`
  font-size: 25px;
`;
