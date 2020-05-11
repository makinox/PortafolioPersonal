import React from 'react';
import { getMessage } from '../../lang/messages';
import { graphql, useStaticQuery } from 'gatsby';
import { Title, Container, Subtitle, Card, Image, CardBody, Description, CardWrapper } from './styles';

export default ({ lang }: { lang: 'en' | 'es' }) => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "experience-img1.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img2: file(relativePath: { eq: "experience-img2.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img3: file(relativePath: { eq: "experience-img3.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img4: file(relativePath: { eq: "experience-img4.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img5: file(relativePath: { eq: "experience-img5.png" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img6: file(relativePath: { eq: "experience-img6.jpeg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img7: file(relativePath: { eq: "experience-img7.jpeg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img8: file(relativePath: { eq: "experience-img8.jpeg" }) {
        childImageSharp {
          fixed(width: 120, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <section id="experience">
      {console.log(data)}
      <Title>
        <h2>{getMessage(lang, 'exp.title')}</h2>
      </Title>
      <Container>
        <Card>
          <div>
            <Subtitle>Regypos</Subtitle>
            <Description>{getMessage(lang, 'exp.sub1')}</Description>
          </div>
          <CardBody>
            <CardWrapper>
              <a href="https://www.regypos.com/" target="_blanck">
                <Image fixed={data.img1.childImageSharp.fixed} alt="Regypos creado por Jesus bossa" />
              </a>
            </CardWrapper>
            <div>
              <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>PWA</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Card>
          <div>
            <Subtitle>Inventario</Subtitle>
            <Description>{getMessage(lang, 'exp.sub1')}</Description>
          </div>
          <CardBody>
            <CardWrapper>
              <a href="https://inventory.regypos.com/" target="_blanck">
                <Image fixed={data.img2.childImageSharp.fixed} alt="Inventario creado por Jesus bossa" />
              </a>
            </CardWrapper>
            <div>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>PWA</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Card>
          <div>
            <Subtitle>Utopia</Subtitle>
            <Description>{getMessage(lang, 'exp.sub1')}</Description>
          </div>
          <CardBody>
            <CardWrapper>
              <a href="https://utopia1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <Image fixed={data.img3.childImageSharp.fixed} alt="Aplicacion de utopia creada por Jesus bossa" />
              </a>
            </CardWrapper>
            <div>
              <ul>
                <li>Vanilla</li>
                <li>Bootstrap</li>
                <li>PWA</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Card>
          <div>
            <Subtitle>Priorize</Subtitle>
            <Description>{getMessage(lang, 'exp.sub2')}</Description>
          </div>
          <CardBody>
            <CardWrapper>
              <a href="https://priorizex.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                <Image fixed={data.img4.childImageSharp.fixed} alt="Aplicacion para tareas por hacer" />
              </a>
            </CardWrapper>
            <div>
              <ul>
                <li>React</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Card>
          <div>
            <Subtitle>MovieApp</Subtitle>
            <Description>{getMessage(lang, 'exp.sub1')}</Description>
          </div>
          <CardBody>
            <CardWrapper>
              <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40makinox/movieplayer-7392818119eeadcbdd885a0622b7063e-signed.apk">
                <Image fixed={data.img5.childImageSharp.fixed} alt="Aplicacion para tareas por hacer" />
              </a>
            </CardWrapper>
            <div>
              <ul>
                <li>React-native</li>
                <li>Redux</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Card>
          <div>
            <Subtitle>Trips</Subtitle>
            <Description>{getMessage(lang, 'exp.sub1')}</Description>
          </div>
          <CardBody>
            <CardWrapper>
              <a href="https://drive.google.com/open?id=16xQ6AhcL--BtdMiLrOAjFTo5G4kvPevU">
                <Image fixed={data.img6.childImageSharp.fixed} alt="Aplicacion de viajes" />
              </a>
            </CardWrapper>
            <div>
              <ul>
                <li>Flutter</li>
                <li>BLoC</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Card>
          <div>
            <Subtitle>Darys</Subtitle>
            <Description>{getMessage(lang, 'exp.sub1')}</Description>
          </div>
          <CardBody>
            <CardWrapper>
              <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.darys.jesusbossa">
                <Image fixed={data.img7.childImageSharp.fixed} alt="Aplicacion de viajes" />
              </a>
            </CardWrapper>
            <div>
              <ul>
                <li>Ionic</li>
                <li>Capacitor</li>
                <li>Angular</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Card>
          <div>
            <Subtitle>Factiffy</Subtitle>
            <Description>{getMessage(lang, 'exp.sub1')}</Description>
          </div>
          <CardBody>
            <CardWrapper>
              <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.jesusbossa.factiffy">
                <Image fixed={data.img8.childImageSharp.fixed} alt="Aplicacion de viajes" />
              </a>
            </CardWrapper>
            <div>
              <ul>
                <li>Ionic</li>
                <li>Cordova</li>
                <li>Angular</li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};
