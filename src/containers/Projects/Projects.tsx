import { Button } from '@makinox/makinox-ui';
import React, { useState } from 'react';
import { ProjectFilter } from './Projects.styles';

const ProjectList = ['New', 'Web apps', 'Native apps', 'Games', 'All'];

function Projects() {
  const [list, useList] = useState(ProjectList[0]);

  function HandleProjectFilter(element: string) {
    useList(element);
  }

  return (
    <ProjectFilter className="flex justify-center">
      {ProjectList.map((element) => (
        <Button onClick={() => HandleProjectFilter(element)} message={element} use={element === list ? 'contained' : 'outlined'} />
      ))}
    </ProjectFilter>
  );
}

export default Projects;
