import React from 'react';
import { getMessage } from '../../lang/messages';
import { graphql, useStaticQuery } from 'gatsby';
import { Title, Container, Subtitle, Card, Image, CardBody, Description, CardWrapper } from './styles';

export default ({ lang }: { lang: 'en' | 'es' }) => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "experience/experience-img1.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img2: file(relativePath: { eq: "experience/experience-img2.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img3: file(relativePath: { eq: "experience/experience-img3.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img4: file(relativePath: { eq: "experience/experience-img4.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img5: file(relativePath: { eq: "experience/experience-img5.png" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img6: file(relativePath: { eq: "experience/experience-img6.jpeg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img7: file(relativePath: { eq: "experience/experience-img7.jpeg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img8: file(relativePath: { eq: "experience/experience-img8.jpeg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img9: file(relativePath: { eq: "experience/experience-img9.jpeg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const proyects = [
    {
      subtitle: 'Regypos',
      description: 'exp.sub1',
      ref: 'https://www.regypos.com/',
      imgName: 'img1',
      imgAlt: 'Regypos creado por Jesus bossa',
      techList: ['React', 'Bootstrap', 'PWA'],
    },
    {
      subtitle: 'Inventario',
      description: 'exp.sub1',
      ref: 'https://inventory.regypos.com',
      imgName: 'img2',
      imgAlt: 'Inventario creado por Jesus bossa',
      techList: ['React', 'Redux', 'Bootstrap', 'PWA'],
    },
    {
      subtitle: 'Utopia',
      description: 'exp.sub1',
      ref: 'https://utopia1.herokuapp.com',
      imgName: 'img3',
      imgAlt: 'Aplicacion de utopia creada por Jesus bossa',
      techList: ['VanillaJS', 'PWA'],
    },
    {
      subtitle: 'Priorize',
      description: 'exp.sub1',
      ref: 'https://priorize.jesusbossa.dev/',
      imgName: 'img4',
      imgAlt: 'Aplicacion para tareas basicas por Jesus bossa',
      techList: ['ReactJS', 'PWA'],
    },
    {
      subtitle: 'MovieApp',
      description: 'exp.sub1',
      ref: 'https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40makinox/movieplayer-7392818119eeadcbdd885a0622b7063e-signed.apk',
      imgName: 'img5',
      imgAlt: 'Aplicacion para ver trailers de peliculas por Jesus bossa',
      techList: ['React-native', 'Redux'],
    },
    {
      subtitle: 'Factiffy',
      description: 'exp.sub1',
      ref: 'https://play.google.com/store/apps/details?id=com.jesusbossa.factiffy',
      imgName: 'img8',
      imgAlt: 'Aplicacion de red social por Jesus bossa',
      techList: ['Ionic', 'Cordova', 'Angular'],
    },
    {
      subtitle: 'Trips',
      description: 'exp.sub1',
      ref: 'https://drive.google.com/open?id=16xQ6AhcL--BtdMiLrOAjFTo5G4kvPevU',
      imgName: 'img6',
      imgAlt: 'Aplicacion de viajes por Jesus bossa',
      techList: ['Flutter', 'BLoC'],
    },
    {
      subtitle: 'Darys',
      description: 'exp.sub1',
      ref: 'https://play.google.com/store/apps/details?id=com.darys.jesusbossa',
      imgName: 'img7',
      imgAlt: 'Aplicacion de diario y notas por Jesus bossa',
      techList: ['Ionic', 'Capacitor', 'Angular'],
    },
    {
      subtitle: 'Financial',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/financial',
      imgName: 'img9',
      imgAlt: 'Aplicacion de finanzas por Jesus bossa',
      techList: ['Ios', 'Storyboards', 'Pods'],
    },
  ];

  proyects.reverse();

  return (
    <section id="experience">
      <Title>
        <h2>{getMessage(lang, 'exp.title')}</h2>
      </Title>
      <Container>
        {proyects.map((el, index) => (
          <Card key={index}>
            <div>
              <Subtitle>{el.subtitle}</Subtitle>
              <Description>{getMessage(lang, 'exp.sub1')}</Description>
            </div>
            <CardBody>
              <CardWrapper>
                <a href={el.ref} target="_blanck">
                  <Image fixed={data[el.imgName].childImageSharp.fixed} alt={el.imgAlt} />
                </a>
              </CardWrapper>
              <CardWrapper>
                <ul>
                  {el.techList.map((te, idx) => (
                    <li key={idx}>{te}</li>
                  ))}
                </ul>
              </CardWrapper>
            </CardBody>
          </Card>
        ))}
      </Container>
    </section>
  );
};
