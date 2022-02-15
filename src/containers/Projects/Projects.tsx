import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ButtonContained, ButtonOutline, ButtonText, Card, FluidContainer } from '@makinox/makinox-ui';

import { ProjectCard, ProjectContainer, ProjectFilter, ProjectSection } from './Projects.styles';
import { useProjectQuery } from './Projects.graph';
import { translations } from '../../types';
import projects from './Projects.mock';

const ProjectInfo = projects.reverse();

function Projects({ messages, isDark }: { messages: translations; isDark: boolean }) {
  const ProjectList = [
    { text: messages['exp.filter1'], filter: 'New', count: ProjectInfo.filter((prj) => prj.status !== 'Old').length },
    { text: messages['exp.filter2'], filter: 'Web', count: ProjectInfo.filter((prj) => prj.status === 'Web').length },
    { text: messages['exp.filter3'], filter: 'Native', count: ProjectInfo.filter((prj) => prj.status === 'Native').length },
    { text: messages['exp.filter4'], filter: 'Game', count: ProjectInfo.filter((prj) => prj.status === 'Game').length },
    { text: messages['exp.filter6'], filter: 'Library', count: ProjectInfo.filter((prj) => prj.status === 'Library').length },
    { text: messages['exp.filter5'], filter: 'All', count: ProjectInfo.length },
  ];

  const [filter, useFilter] = useState(ProjectList[0]);
  const imageList = useProjectQuery();

  function HandleProjectFilter(element) {
    useFilter(element);
  }

  const FilteredCard = ({ el, image, CardButtons }) => (
    <ProjectCard className={Card({ isDark, type: 'outlined' })}>
      <div className="card-media">
        <GatsbyImage image={image} alt={el.imgAlt} />
      </div>
      <div className="card-header">
        <h6 className="headline6">{el.subtitle}</h6>
      </div>
      <div className="card-body">
        <p className="body2">{el.techList.join(' - ')}</p>
      </div>
      <div className="card-bottom">{CardButtons.map((mapedButton) => mapedButton)}</div>
    </ProjectCard>
  );

  return (
    <ProjectContainer className={FluidContainer()} id="projects">
      <h3 className="headline4 text-center">{messages['exp.title']}</h3>
      <ProjectFilter className="flex justify-center flex-wrap">
        {ProjectList.map((element, idx) => {
          if (element.filter === filter.filter) {
            return (
              <button className={ButtonContained({ isDark })} key={`${element}-${idx}`} onClick={() => HandleProjectFilter(element)}>
                {element.text} {element.count}
              </button>
            );
          }

          return (
            <button className={ButtonOutline({ isDark })} key={`${element}-${idx}`} onClick={() => HandleProjectFilter(element)}>
              {element.text} {element.count}
            </button>
          );
        })}
      </ProjectFilter>
      <ProjectSection className="flex flex-wrap justify-center">
        {ProjectInfo.map((el, index) => {
          const image = getImage(imageList[el.imgName]);
          const CardButtons = [];
          if (el.repo) {
            CardButtons.push(
              <button className={ButtonText({ isDark })} onClick={() => window.open(el.repo, '_blank')} key={`button repo ${el.description}`}>
                repo
              </button>
            );
          }
          if (el.app) {
            CardButtons.push(
              <button className={ButtonText({ isDark })} onClick={() => window.open(el.app, '_blank')} key={`button app ${el.description}`}>
                app
              </button>
            );
          }
          switch (filter.filter) {
            case 'New':
              if (el.status !== 'Old') {
                return <FilteredCard el={el} image={image} CardButtons={CardButtons} key={`${el.subtitle}-${index}`} />;
              }
              break;
            case 'Web':
              if (el.status === 'Web') {
                return <FilteredCard el={el} image={image} CardButtons={CardButtons} key={`${el.subtitle}-${index}`} />;
              }
              break;
            case 'Native':
              if (el.status === 'Native') {
                return <FilteredCard el={el} image={image} CardButtons={CardButtons} key={`${el.subtitle}-${index}`} />;
              }
              break;
            case 'Library':
              if (el.status === 'Library') {
                return <FilteredCard el={el} image={image} CardButtons={CardButtons} key={`${el.subtitle}-${index}`} />;
              }
              break;
            case 'Game':
              if (el.status === 'Game') {
                return <FilteredCard el={el} image={image} CardButtons={CardButtons} key={`${el.subtitle}-${index}`} />;
              }
              break;
            case 'All':
              return <FilteredCard el={el} image={image} CardButtons={CardButtons} key={`${el.subtitle}-${index}`} />;
          }
        })}
      </ProjectSection>
    </ProjectContainer>
  );
}

export default Projects;
