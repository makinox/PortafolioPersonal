import { Button, FluidContainer } from '@makinox/makinox-ui';
import React, { useState } from 'react';
import { ProjectCard, ProjectFilter, ProjectSection } from './Projects.styles';
import { useProjectQuery } from './Projects.graph';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProjectList = [
  { text: 'New', filter: 'New' },
  { text: 'Web apps', filter: 'Web' },
  { text: 'Native apps', filter: 'Native' },
  { text: 'Games', filter: 'Game' },
  { text: 'All', filter: 'All' },
];
const ProjectInfo = [
  {
    subtitle: 'Regypos',
    description: 'exp.sub1',
    ref: 'https://www.regypos.com/',
    repo: '',
    app: 'https://www.regypos.com',
    imgName: 'img1',
    imgSrc: '../../images/projects/projects-img1.jpg',
    imgAlt: 'Regypos creado por Jesus bossa',
    techList: ['React', 'Bootstrap', 'PWA'],
    status: 'Old',
  },
  {
    subtitle: 'Inventario',
    description: 'exp.sub1',
    ref: 'https://inventory.regypos.com',
    repo: '',
    app: 'https://inventory.regypos.com',
    imgName: 'img2',
    imgSrc: '../../images/projects/projects-img2.jpg',
    imgAlt: 'Inventario creado por Jesus bossa',
    techList: ['React', 'Redux', 'Bootstrap', 'PWA'],
    status: 'Old',
  },
  {
    subtitle: 'Utopia',
    description: 'exp.sub1',
    ref: 'https://utopia1.herokuapp.com',
    repo: '',
    app: 'https://utopia1.herokuapp.com',
    imgName: 'img3',
    imgSrc: '../../images/projects/projects-img3.jpg',
    imgAlt: 'Aplicacion de utopia creada por Jesus bossa',
    techList: ['VanillaJS', 'PWA'],
    status: 'Old',
  },
  {
    subtitle: 'MovieApp',
    description: 'exp.sub1',
    ref: 'https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40makinox/movieplayer-7392818119eeadcbdd885a0622b7063e-signed.apk',
    repo: 'https://github.com/makinox/moviePlayer',
    app: 'https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40makinox/movieplayer-7392818119eeadcbdd885a0622b7063e-signed.apk',
    imgName: 'img5',
    imgSrc: '../../images/projects/projects-img5.jpg',
    imgAlt: 'Aplicacion para ver trailers de peliculas por Jesus bossa',
    techList: ['React-native', 'Redux'],
    status: 'Old',
  },
  {
    subtitle: 'Trips',
    description: 'exp.sub1',
    ref: 'https://drive.google.com/open?id=16xQ6AhcL--BtdMiLrOAjFTo5G4kvPevU',
    repo: 'https://github.com/makinox/flutter-trips',
    app: 'https://drive.google.com/open?id=16xQ6AhcL--BtdMiLrOAjFTo5G4kvPevU',
    imgName: 'img6',
    imgSrc: '../../images/projects/projects-img6.jpg',
    imgAlt: 'Aplicacion de viajes por Jesus bossa',
    techList: ['Flutter', 'BLoC'],
    status: 'Old',
  },
  {
    subtitle: 'Priorize',
    description: 'exp.sub1',
    ref: 'https://priorize.jesusbossa.dev/',
    repo: 'https://github.com/makinox/priorize',
    app: 'https://priorize.jesusbossa.dev/',
    imgName: 'img4',
    imgSrc: '../../images/projects/projects-img4.jpg',
    imgAlt: 'Aplicacion para tareas basicas por Jesus bossa',
    techList: ['ReactJS', 'PWA'],
    status: 'Web',
  },
  {
    subtitle: 'Factiffy',
    description: 'exp.sub1',
    ref: 'https://play.google.com/store/apps/details?id=com.jesusbossa.factiffy',
    repo: '',
    app: 'https://play.google.com/store/apps/details?id=com.jesusbossa.factiffy',
    imgName: 'img8',
    imgSrc: '../../images/projects/projects-img8.jpg',
    imgAlt: 'Aplicacion de red social por Jesus bossa',
    techList: ['Ionic', 'Cordova', 'Angular'],
    status: 'Native',
  },
  {
    subtitle: 'Darys',
    description: 'exp.sub1',
    ref: 'https://play.google.com/store/apps/details?id=com.darys.jesusbossa',
    repo: '',
    app: 'https://play.google.com/store/apps/details?id=com.darys.jesusbossa',
    imgName: 'img7',
    imgSrc: '../../images/projects/projects-img7.jpg',
    imgAlt: 'Aplicacion de diario y notas por Jesus bossa',
    techList: ['Ionic', 'Capacitor', 'Angular'],
    status: 'Native',
  },
  {
    subtitle: 'Financial',
    description: 'exp.sub1',
    ref: 'https://github.com/makinox/financial',
    repo: 'https://github.com/makinox/financial',
    app: '',
    imgName: 'img9',
    imgSrc: '../../images/projects/projects-img9.jpg',
    imgAlt: 'Aplicacion de finanzas por Jesus bossa',
    techList: ['Ios', 'Storyboards', 'Pods'],
    status: 'Native',
  },
  {
    subtitle: 'Petigram',
    description: 'exp.sub1',
    ref: 'https://github.com/makinox/petigram',
    repo: 'https://github.com/makinox/petigram',
    app: 'https://petgram-front-makinox.makinoxx.now.sh/',
    imgName: 'img10',
    imgSrc: '../../images/projects/projects-img10.jpg',
    imgAlt: 'Aplicacion de mascotas por Jesus bossa',
    techList: ['React', 'Hooks', 'GraphQl'],
    status: 'Web',
  },
  {
    subtitle: 'Vtask',
    description: 'exp.sub1',
    ref: 'https://github.com/makinox/vtask',
    repo: 'https://github.com/makinox/vtask',
    app: 'https://vtask.jesusbossa.dev/',
    imgName: 'img17',
    imgSrc: '../../images/projects/projects-img17.jpg',
    imgAlt: 'Aplicacion de tareas por Jesus bossa',
    techList: ['Vue'],
    status: 'Web',
  },
  {
    subtitle: 'Thumb',
    description: 'exp.sub1',
    ref: 'https://github.com/makinox/Thumb',
    repo: 'https://github.com/makinox/Thumb',
    app: 'https://thumb.jesusbossa.dev/',
    imgName: 'img18',
    imgSrc: '../../images/projects/projects-img18.jpg',
    imgAlt: 'Aplicacion de votos por Jesus bossa',
    techList: ['React'],
    status: 'Web',
  },
  {
    subtitle: 'Cereno',
    description: 'exp.sub1',
    ref: 'https://github.com/makinox/Cereno',
    repo: 'https://github.com/makinox/Cereno',
    app: 'https://cereno.jesusbossa.dev/',
    imgName: 'img11',
    imgSrc: '../../images/projects/projects-img11.jpg',
    imgAlt: 'Aplicacion de restaurantes por Jesus bossa',
    techList: ['React', 'Gatsby', 'GraphQl'],
    status: 'Web',
  },
  {
    subtitle: 'Best pizza',
    description: 'exp.sub1',
    ref: 'https://github.com/makinox/Best-pizza',
    repo: 'https://github.com/makinox/Best-pizza',
    app: 'https://bpizza.jesusbossa.dev',
    imgName: 'img19',
    imgSrc: '../../images/projects/projects-img19.jpg',
    imgAlt: 'Aplicacion de pizza por Jesus bossa',
    techList: ['React'],
    status: 'Web',
  },
  {
    subtitle: 'Moose',
    description: 'exp.sub1',
    ref: 'https://github.com/makinox/Moose',
    repo: 'https://github.com/makinox/Moose',
    app: 'https://play.google.com/store/apps/details?id=moose.jesusbossa.dev',
    imgName: 'img13',
    imgSrc: '../../images/projects/projects-img13.jpg',
    imgAlt: 'Museo interactivo por Jesus bossa',
    techList: ['React-Native', 'Gatsby', 'GraphQl'],
    status: 'Native',
  },
  {
    subtitle: 'Memory Game',
    description: 'exp.sub1',
    ref: 'https://github.com/makinox/Memory-game/',
    repo: 'https://github.com/makinox/Memory-game',
    app: 'https://memory.jesusbossa.dev/',
    imgName: 'img15',
    imgSrc: '../../images/projects/projects-img15.jpg',
    imgAlt: 'Juego de memoria por Jesus bossa',
    techList: ['Vanilla'],
    status: 'Game',
  },
  {
    subtitle: 'Snake Game',
    description: 'exp.sub1',
    ref: 'https://github.com/makinox/Snake-game/',
    repo: 'https://github.com/makinox/Snake-game',
    app: 'https://snake.jesusbossa.dev/',
    imgName: 'img16',
    imgSrc: '../../images/projects/projects-img16.jpg',
    imgAlt: 'Juego de la culebrita por Jesus bossa',
    techList: ['Vanilla'],
    status: 'Game',
  },
  {
    subtitle: 'Preview',
    description: 'exp.sub1',
    ref: 'https://github.com/makinox/shVideo',
    repo: 'https://github.com/makinox/shVideo',
    app: 'https://preview.jesusbossa.dev/',
    imgName: 'img14',
    imgSrc: '../../images/projects/projects-img14.jpg',
    imgAlt: 'App de videos por Jesus bossa',
    techList: ['Angular', 'Custom', 'PWA'],
    status: 'Web',
  },
  {
    subtitle: 'Blog',
    description: 'exp.sub1',
    ref: 'https://github.com/makinox/blog',
    repo: 'https://github.com/makinox/blog',
    app: 'https://voib.jesusbossa.dev/',
    imgName: 'img12',
    imgSrc: '../../images/projects/projects-img12.jpg',
    imgAlt: 'Blog por Jesus bossa',
    techList: ['React', 'Gatsby', 'GraphQl'],
    status: 'Web',
  },
];

function Projects() {
  const [filter, useFilter] = useState(ProjectList[0]);
  const imageList = useProjectQuery();

  function HandleProjectFilter(element) {
    useFilter(element);
  }

  return (
    <FluidContainer>
      <ProjectFilter className="flex justify-center">
        {ProjectList.map((element, idx) => (
          <Button
            key={`${element}-${idx}`}
            onClick={() => HandleProjectFilter(element)}
            message={element.text}
            use={element === filter ? 'contained' : 'outlined'}
          />
        ))}
      </ProjectFilter>
      <ProjectSection className="flex flex-wrap justify-center">
        {ProjectInfo.reverse().map((el, index) => {
          const image = getImage(imageList[el.imgName]);
          const CardButtons: any = [];
          if (el.repo) {
            CardButtons.push(
              <Button onClick={() => window.open(el.repo, '_blank')} key={`button repo ${el.description}`} use="text" message="repo" />
            );
          }
          if (el.app) {
            CardButtons.push(<Button onClick={() => window.open(el.app, '_blank')} key={`button app ${el.description}`} use="text" message="app" />);
          }
          switch (filter.filter) {
            case 'New':
              if (el.status !== 'Old') {
                return (
                  <ProjectCard
                    use="outlined"
                    title={el.subtitle}
                    key={`${el.subtitle}-${index}`}
                    customMedia={<GatsbyImage image={image} alt={el.imgAlt} />}
                    buttons={CardButtons}
                  />
                );
              }
              break;
            case 'Web':
              if (el.status === 'Web') {
                return (
                  <ProjectCard
                    use="outlined"
                    title={el.subtitle}
                    key={`${el.subtitle}-${index}`}
                    customMedia={<GatsbyImage image={image} alt={el.imgAlt} />}
                    buttons={CardButtons}
                  />
                );
              }
              break;
            case 'Native':
              if (el.status === 'Native') {
                return (
                  <ProjectCard
                    use="outlined"
                    title={el.subtitle}
                    key={`${el.subtitle}-${index}`}
                    customMedia={<GatsbyImage image={image} alt={el.imgAlt} />}
                    buttons={CardButtons}
                  />
                );
              }
              break;
            case 'Game':
              if (el.status === 'Game') {
                return (
                  <ProjectCard
                    use="outlined"
                    title={el.subtitle}
                    key={`${el.subtitle}-${index}`}
                    customMedia={<GatsbyImage image={image} alt={el.imgAlt} />}
                    buttons={CardButtons}
                  />
                );
              }
              break;
            case 'All':
              return (
                <ProjectCard
                  use="outlined"
                  title={el.subtitle}
                  key={`${el.subtitle}-${index}`}
                  customMedia={<GatsbyImage image={image} alt={el.imgAlt} />}
                  buttons={CardButtons}
                />
              );
          }
        })}
      </ProjectSection>
    </FluidContainer>
  );
}

export default Projects;
