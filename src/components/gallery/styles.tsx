import styled from 'styled-components';

export const GallerySubtitle = styled.div`
  margin-top: 40px;

  & h3 {
    text-align: center;
    font-size: 24px;
  }
`;

export const GalleryCarousel = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  display: flex;

  & a {
    text-decoration: none;
    display: flex;
    margin: 10px;
  }

  & img {
    box-shadow: 3px 3px 10px 0px rgb(0 0 0 / 10%);
    object-position: center center;
    transition: all 0.3s;
    border-radius: 5px;
    object-fit: cover;
    height: 180px;
  }

  & img:hover {
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
  }
`;
