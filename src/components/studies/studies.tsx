import React from 'react';
import { getMessage } from '../../lang/messages';
import { useStaticQuery, graphql } from 'gatsby';
import { Anchor, Button, Card, Subtitle, Title, CardBackground, CardContainer, Overlay } from './styles';

export default ({ lang }: { lang: 'en' | 'es' }) => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "studies/Img1.svg" }) {
        publicURL
      }

      img2: file(relativePath: { eq: "studies/Img2.svg" }) {
        publicURL
      }

      img3: file(relativePath: { eq: "studies/Img3.svg" }) {
        publicURL
      }

      img4: file(relativePath: { eq: "studies/Img4.svg" }) {
        publicURL
      }

      img5: file(relativePath: { eq: "studies/Img5.svg" }) {
        publicURL
      }

      img6: file(relativePath: { eq: "studies/Img6.svg" }) {
        publicURL
      }

      img7: file(relativePath: { eq: "studies/Img7.svg" }) {
        publicURL
      }

      img8: file(relativePath: { eq: "studies/Img8.svg" }) {
        publicURL
      }

      img9: file(relativePath: { eq: "studies/Img9.svg" }) {
        publicURL
      }

      img10: file(relativePath: { eq: "studies/Img10.svg" }) {
        publicURL
      }

      img11: file(relativePath: { eq: "studies/Img11.svg" }) {
        publicURL
      }

      img12: file(relativePath: { eq: "studies/Img12.svg" }) {
        publicURL
      }

      img13: file(relativePath: { eq: "studies/Img13.svg" }) {
        publicURL
      }

      img14: file(relativePath: { eq: "studies/Img14.svg" }) {
        publicURL
      }

      img15: file(relativePath: { eq: "studies/Img15.svg" }) {
        publicURL
      }

      img16: file(relativePath: { eq: "studies/Img16.svg" }) {
        publicURL
      }

      img17: file(relativePath: { eq: "studies/Img17.svg" }) {
        publicURL
      }

      img18: file(relativePath: { eq: "studies/Img18.svg" }) {
        publicURL
      }

      img19: file(relativePath: { eq: "studies/Img19.svg" }) {
        publicURL
      }

      img20: file(relativePath: { eq: "studies/Img20.svg" }) {
        publicURL
      }

      img21: file(relativePath: { eq: "studies/Img21.svg" }) {
        publicURL
      }

      img22: file(relativePath: { eq: "studies/Img22.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <section id="studies">
      <div>
        <Title>{getMessage(lang, 'edu.title')}</Title>
      </div>
      <Card>
        <CardBackground>
          <CardContainer>
            {Object.keys(data).map((el: any, index: number) => (
              <img key={index} src={data[el].publicURL} alt="Logo de tecnologia dominada por jesús bossa" />
            ))}
          </CardContainer>
        </CardBackground>
        <Overlay>
          <div>
            <Subtitle>{getMessage(lang, 'edu.sub')}</Subtitle>
            <Button>
              <Anchor
                href="https://drive.google.com/drive/folders/0B1M5FQ2FYAeQVFhzMGptMFRNMFE?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {getMessage(lang, 'edu.button')}
              </Anchor>
            </Button>
          </div>
        </Overlay>
      </Card>
    </section>
  );
};
