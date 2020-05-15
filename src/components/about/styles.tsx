import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 900px);
  justify-content: center;
  padding: 20px 0;
`;

export const Item = styled.div`
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  transition: all 0.3s;
  background-color: #fff;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.3);
    transform: scale(1.1);
  }

  @media screen and (max-width: 479px) {
    margin: 5px;
  }
`;

export const Hr = styled.hr`
  width: 80%;
  margin: 20px 0;
  align-self: left;
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;
`;

export const Parragraph = styled.p`
  margin: 10px 0;
`;
