import React, { useState } from 'react';
import { ButtonOutline, ButtonText } from '@makinox/makinox-ui';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { ProjectCard, ProjectContainer, ProjectFilter, ProjectSection } from './Projects.styles';
import { useProjectQuery } from './Projects.graph';
import { translations } from '../../types';
import projects from './Projects.mock';

const ProjectInfo = projects.reverse();

function Projects({ messages, isDark }: { messages: translations; isDark: boolean }) {
  const ProjectList = [
    { text: messages['exp.filter1'], filter: 'New' },
    { text: messages['exp.filter2'], filter: 'Web' },
    { text: messages['exp.filter3'], filter: 'Native' },
    { text: messages['exp.filter4'], filter: 'Game' },
    { text: messages['exp.filter6'], filter: 'Library' },
    { text: messages['exp.filter5'], filter: 'All' },
  ];

  const [filter, useFilter] = useState(ProjectList[0]);
  const imageList = useProjectQuery();

  function HandleProjectFilter(element) {
    useFilter(element);
  }

  return (
    <ProjectContainer id="projects">
      <h3 className="headline4 text-center">{messages['exp.title']}</h3>
      <ProjectFilter className="flex justify-center flex-wrap">
        {ProjectList.map((element, idx) => (
          <button
            className={ButtonOutline({ isDark })}
            key={`${element}-${idx}`}
            onClick={() => HandleProjectFilter(element)}
            // use={element.filter === filter.filter ? 'contained' : 'outlined'}
          >
            {element.text}
          </button>
        ))}
      </ProjectFilter>
      <ProjectSection className="flex flex-wrap justify-center">
        {ProjectInfo.map((el, index) => {
          const image = getImage(imageList[el.imgName]);
          const CardButtons: [JSX.Element?, JSX.Element?] | any = [];
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
                return (
                  <ProjectCard
                    use="outlined"
                    isDark={isDark}
                    title={el.subtitle}
                    buttons={CardButtons}
                    text={el.techList.join(' - ')}
                    key={`${el.subtitle}-${index}`}
                    customMedia={<GatsbyImage image={image} alt={el.imgAlt} />}
                  />
                );
              }
              break;
            case 'Web':
              if (el.status === 'Web') {
                return (
                  <ProjectCard
                    use="outlined"
                    isDark={isDark}
                    title={el.subtitle}
                    buttons={CardButtons}
                    text={el.techList.join(' - ')}
                    key={`${el.subtitle}-${index}`}
                    customMedia={<GatsbyImage image={image} alt={el.imgAlt} />}
                  />
                );
              }
              break;
            case 'Native':
              if (el.status === 'Native') {
                return (
                  <ProjectCard
                    use="outlined"
                    isDark={isDark}
                    title={el.subtitle}
                    buttons={CardButtons}
                    text={el.techList.join(' - ')}
                    key={`${el.subtitle}-${index}`}
                    customMedia={<GatsbyImage image={image} alt={el.imgAlt} objectPosition="top" />}
                  />
                );
              }
              break;
            case 'Library':
              if (el.status === 'Library') {
                return (
                  <ProjectCard
                    use="outlined"
                    isDark={isDark}
                    title={el.subtitle}
                    buttons={CardButtons}
                    text={el.techList.join(' - ')}
                    key={`${el.subtitle}-${index}`}
                    customMedia={<GatsbyImage image={image} alt={el.imgAlt} objectPosition="top" />}
                  />
                );
              }
              break;
            case 'Game':
              if (el.status === 'Game') {
                return (
                  <ProjectCard
                    use="outlined"
                    isDark={isDark}
                    title={el.subtitle}
                    buttons={CardButtons}
                    text={el.techList.join(' - ')}
                    key={`${el.subtitle}-${index}`}
                    customMedia={<GatsbyImage image={image} alt={el.imgAlt} />}
                  />
                );
              }
              break;
            case 'All':
              return (
                <ProjectCard
                  use="outlined"
                  isDark={isDark}
                  title={el.subtitle}
                  buttons={CardButtons}
                  text={el.techList.join(' - ')}
                  key={`${el.subtitle}-${index}`}
                  customMedia={<GatsbyImage image={image} alt={el.imgAlt} />}
                />
              );
          }
        })}
      </ProjectSection>
    </ProjectContainer>
  );
}

export default Projects;
