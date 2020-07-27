import React, { useState } from 'react';
import { getMessage } from '../../lang/messages';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { graphql, useStaticQuery } from 'gatsby';
import { Title, Container, Subtitle, Card, Image, CardBody, Description, CardWrapper, MoreButton, MoreContainer } from './styles';

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
      img10: file(relativePath: { eq: "experience/experience-img10.png" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img11: file(relativePath: { eq: "experience/experience-img11.png" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img12: file(relativePath: { eq: "experience/experience-img12.png" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img13: file(relativePath: { eq: "experience/experience-img13.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img14: file(relativePath: { eq: "experience/experience-img14.png" }) {
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
      subtitle: 'MovieApp',
      description: 'exp.sub1',
      ref: 'https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40makinox/movieplayer-7392818119eeadcbdd885a0622b7063e-signed.apk',
      imgName: 'img5',
      imgAlt: 'Aplicacion para ver trailers de peliculas por Jesus bossa',
      techList: ['React-native', 'Redux'],
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
      subtitle: 'Priorize',
      description: 'exp.sub1',
      ref: 'https://priorize.jesusbossa.dev/',
      imgName: 'img4',
      imgAlt: 'Aplicacion para tareas basicas por Jesus bossa',
      techList: ['ReactJS', 'PWA'],
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
    {
      subtitle: 'Petigram',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/petigram',
      imgName: 'img10',
      imgAlt: 'Aplicacion de mascotas por Jesus bossa',
      techList: ['React', 'Hooks', 'GraphQl'],
    },
    {
      subtitle: 'Cereno',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/Cereno',
      imgName: 'img11',
      imgAlt: 'Aplicacion de restaurantes por Jesus bossa',
      techList: ['React', 'Gatsby', 'GraphQl'],
    },
    {
      subtitle: 'Moose',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/Moose',
      imgName: 'img13',
      imgAlt: 'Museo interactivo por Jesus bossa',
      techList: ['React-Native', 'Gatsby', 'GraphQl'],
    },
    {
      subtitle: 'Preview',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/shVideo',
      imgName: 'img14',
      imgAlt: 'App de videos por Jesus bossa',
      techList: ['Angular', 'Custom', 'PWA'],
    },
    {
      subtitle: 'Blog',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/blog',
      imgName: 'img12',
      imgAlt: 'Blog por Jesus bossa',
      techList: ['React', 'Gatsby', 'GraphQl'],
    },
  ];

  const [limit, useLimit] = useState(9);

  proyects.reverse();

  return (
    <section id="experience">
      <Title>
        <h2>{getMessage(lang, 'exp.title')}</h2>
      </Title>
      <Container>
        {proyects.map((el, index) => {
          if (index > limit) {
            return;
          }
          return (
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
          );
        })}
      </Container>
      <MoreContainer>
        <MoreButton onClick={() => (limit === 9 ? useLimit(14) : useLimit(9))}>
          {limit === 9 ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
        </MoreButton>
      </MoreContainer>
    </section>
  );
};
