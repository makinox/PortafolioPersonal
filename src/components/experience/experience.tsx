import React, { useState, useRef, useEffect } from 'react';
import { getMessage } from '../../lang/messages';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidContainer } from '../';
import {
  Title,
  Container,
  Subtitle,
  Card,
  Image,
  CardBody,
  Description,
  CardWrapper,
  MoreButton,
  MoreContainer,
  CardInfoButton,
  CardInfoContainer,
  CardInfoShow,
  CardInfoFooter,
  CardInfo,
  CardInfoList,
  CardInfoFooterLink,
} from './styles';

const CardComponent = ({ el, lang, data }: { el: any; lang: any; data: any }) => {
  const element = useRef(null);

  useEffect(() => {
    checkViewPort();
  }, []);

  function checkViewPort() {
    const bounding = element.current.getBoundingClientRect();
    // console.log(bounding);

    let out: any = {};
    out.top = bounding.top < 0;
    out.left = bounding.left < 0;
    out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
    out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;
    out.all = out.top && out.left && out.bottom && out.right;
    console.log(out);
  }

  return (
    <Card ref={element}>
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
      </CardBody>
      <CardInfo>
        <CardInfoButton>
          <AiOutlineInfoCircle />
          <span>More info</span>
        </CardInfoButton>

        <CardInfoContainer ref={element}>
          <CardInfoShow>
            <Image fixed={data[`${el.imgName}Big`].childImageSharp.fixed} alt={el.imgAlt} />
            <CardInfoList>
              {el.techList.map((te: any, idx: any) => (
                <li key={idx}>{te}</li>
              ))}
            </CardInfoList>
          </CardInfoShow>

          <CardInfoFooter>
            {el.app && (
              <CardInfoFooterLink target="_blank" href={el.app}>
                App link
              </CardInfoFooterLink>
            )}
            {el.repo && (
              <CardInfoFooterLink target="_blank" href={el.repo}>
                Repo access
              </CardInfoFooterLink>
            )}
          </CardInfoFooter>
        </CardInfoContainer>
      </CardInfo>
    </Card>
  );
};

export default ({ lang }: { lang: 'en' | 'es' }) => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "experience/experience-img1.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img1Big: file(relativePath: { eq: "experience/experience-img1.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img2: file(relativePath: { eq: "experience/experience-img2.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img2Big: file(relativePath: { eq: "experience/experience-img2.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img3: file(relativePath: { eq: "experience/experience-img3.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img3Big: file(relativePath: { eq: "experience/experience-img3.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img4: file(relativePath: { eq: "experience/experience-img4.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img4Big: file(relativePath: { eq: "experience/experience-img4.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img5: file(relativePath: { eq: "experience/experience-img5.png" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img5Big: file(relativePath: { eq: "experience/experience-img5.png" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img6: file(relativePath: { eq: "experience/experience-img6.jpeg" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img6Big: file(relativePath: { eq: "experience/experience-img6.jpeg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img7: file(relativePath: { eq: "experience/experience-img7.jpeg" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img7Big: file(relativePath: { eq: "experience/experience-img7.jpeg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img8: file(relativePath: { eq: "experience/experience-img8.jpeg" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img8Big: file(relativePath: { eq: "experience/experience-img8.jpeg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img9: file(relativePath: { eq: "experience/experience-img9.jpeg" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img9Big: file(relativePath: { eq: "experience/experience-img9.jpeg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img10: file(relativePath: { eq: "experience/experience-img10.png" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img10Big: file(relativePath: { eq: "experience/experience-img10.png" }) {
        childImageSharp {
          fixed(width: 400, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img11: file(relativePath: { eq: "experience/experience-img11.png" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img11Big: file(relativePath: { eq: "experience/experience-img11.png" }) {
        childImageSharp {
          fixed(width: 400, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img12: file(relativePath: { eq: "experience/experience-img12.png" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img12Big: file(relativePath: { eq: "experience/experience-img12.png" }) {
        childImageSharp {
          fixed(width: 400, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img13: file(relativePath: { eq: "experience/experience-img13.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img13Big: file(relativePath: { eq: "experience/experience-img13.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img14: file(relativePath: { eq: "experience/experience-img14.png" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img14Big: file(relativePath: { eq: "experience/experience-img14.png" }) {
        childImageSharp {
          fixed(width: 400, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img15: file(relativePath: { eq: "experience/experience-img15.png" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img15Big: file(relativePath: { eq: "experience/experience-img15.png" }) {
        childImageSharp {
          fixed(width: 400, height: 300) {
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
      repo: '',
      app: 'https://www.regypos.com',
      imgName: 'img1',
      imgAlt: 'Regypos creado por Jesus bossa',
      techList: ['React', 'Bootstrap', 'PWA'],
    },
    {
      subtitle: 'Inventario',
      description: 'exp.sub1',
      ref: 'https://inventory.regypos.com',
      repo: '',
      app: 'https://inventory.regypos.com',
      imgName: 'img2',
      imgAlt: 'Inventario creado por Jesus bossa',
      techList: ['React', 'Redux', 'Bootstrap', 'PWA'],
    },
    {
      subtitle: 'Utopia',
      description: 'exp.sub1',
      ref: 'https://utopia1.herokuapp.com',
      repo: '',
      app: 'https://utopia1.herokuapp.com',
      imgName: 'img3',
      imgAlt: 'Aplicacion de utopia creada por Jesus bossa',
      techList: ['VanillaJS', 'PWA'],
    },
    {
      subtitle: 'MovieApp',
      description: 'exp.sub1',
      ref: 'https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40makinox/movieplayer-7392818119eeadcbdd885a0622b7063e-signed.apk',
      repo: 'https://github.com/makinox/moviePlayer',
      app: 'https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40makinox/movieplayer-7392818119eeadcbdd885a0622b7063e-signed.apk',
      imgName: 'img5',
      imgAlt: 'Aplicacion para ver trailers de peliculas por Jesus bossa',
      techList: ['React-native', 'Redux'],
    },
    {
      subtitle: 'Trips',
      description: 'exp.sub1',
      ref: 'https://drive.google.com/open?id=16xQ6AhcL--BtdMiLrOAjFTo5G4kvPevU',
      repo: 'https://github.com/makinox/flutter-trips',
      app: 'https://drive.google.com/open?id=16xQ6AhcL--BtdMiLrOAjFTo5G4kvPevU',
      imgName: 'img6',
      imgAlt: 'Aplicacion de viajes por Jesus bossa',
      techList: ['Flutter', 'BLoC'],
    },
    {
      subtitle: 'Priorize',
      description: 'exp.sub1',
      ref: 'https://priorize.jesusbossa.dev/',
      repo: 'https://github.com/makinox/priorize',
      app: 'https://priorize.jesusbossa.dev/',
      imgName: 'img4',
      imgAlt: 'Aplicacion para tareas basicas por Jesus bossa',
      techList: ['ReactJS', 'PWA'],
    },
    {
      subtitle: 'Factiffy',
      description: 'exp.sub1',
      ref: 'https://play.google.com/store/apps/details?id=com.jesusbossa.factiffy',
      repo: '',
      app: 'https://play.google.com/store/apps/details?id=com.jesusbossa.factiffy',
      imgName: 'img8',
      imgAlt: 'Aplicacion de red social por Jesus bossa',
      techList: ['Ionic', 'Cordova', 'Angular'],
    },
    {
      subtitle: 'Darys',
      description: 'exp.sub1',
      ref: 'https://play.google.com/store/apps/details?id=com.darys.jesusbossa',
      repo: '',
      app: 'https://play.google.com/store/apps/details?id=com.darys.jesusbossa',
      imgName: 'img7',
      imgAlt: 'Aplicacion de diario y notas por Jesus bossa',
      techList: ['Ionic', 'Capacitor', 'Angular'],
    },
    {
      subtitle: 'Financial',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/financial',
      repo: 'https://github.com/makinox/financial',
      app: '',
      imgName: 'img9',
      imgAlt: 'Aplicacion de finanzas por Jesus bossa',
      techList: ['Ios', 'Storyboards', 'Pods'],
    },
    {
      subtitle: 'Petigram',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/petigram',
      repo: 'https://github.com/makinox/petigram',
      app: 'https://petgram-front-makinox.makinoxx.now.sh/',
      imgName: 'img10',
      imgAlt: 'Aplicacion de mascotas por Jesus bossa',
      techList: ['React', 'Hooks', 'GraphQl'],
    },
    {
      subtitle: 'Cereno',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/Cereno',
      repo: 'https://github.com/makinox/Cereno',
      app: 'https://cereno.jesusbossa.dev/',
      imgName: 'img11',
      imgAlt: 'Aplicacion de restaurantes por Jesus bossa',
      techList: ['React', 'Gatsby', 'GraphQl'],
    },
    {
      subtitle: 'Moose',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/Moose',
      repo: 'https://github.com/makinox/Moose',
      app: 'https://play.google.com/store/apps/details?id=moose.jesusbossa.dev',
      imgName: 'img13',
      imgAlt: 'Museo interactivo por Jesus bossa',
      techList: ['React-Native', 'Gatsby', 'GraphQl'],
    },
    {
      subtitle: 'Memory Game',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/Memory-game/',
      repo: 'https://github.com/makinox/Memory-game',
      app: 'https://memory.jesusbossa.dev/',
      imgName: 'img15',
      imgAlt: 'Juego de memoria por Jesus bossa',
      techList: ['Vanilla'],
    },
    {
      subtitle: 'Preview',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/shVideo',
      repo: 'https://github.com/makinox/shVideo',
      app: 'https://preview.jesusbossa.dev/',
      imgName: 'img14',
      imgAlt: 'App de videos por Jesus bossa',
      techList: ['Angular', 'Custom', 'PWA'],
    },
    {
      subtitle: 'Blog',
      description: 'exp.sub1',
      ref: 'https://github.com/makinox/blog',
      repo: 'https://github.com/makinox/blog',
      app: 'https://voib.jesusbossa.dev/',
      imgName: 'img12',
      imgAlt: 'Blog por Jesus bossa',
      techList: ['React', 'Gatsby', 'GraphQl'],
    },
  ];

  const [limit, useLimit] = useState(10);

  proyects.reverse();

  return (
    <FluidContainer>
      <section id="experience">
        <Title>
          <h2>{getMessage(lang, 'exp.title')}</h2>
        </Title>
        <Container>
          {proyects.map((el, index) => {
            if (index > limit) {
              return;
            }
            return <CardComponent data={data} el={el} lang={lang} key={index} />;
          })}
        </Container>
        <MoreContainer>
          <MoreButton onClick={() => (limit === 10 ? useLimit(15) : useLimit(10))}>
            {limit === 10 ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
          </MoreButton>
        </MoreContainer>
      </section>
    </FluidContainer>
  );
};
