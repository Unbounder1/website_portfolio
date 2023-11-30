
import React, { useState } from 'react';
import SearchBar from './searchbar';
import ProjectContainer from './project_box';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectList = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const matchedProjects = projects.filter((project) =>
      project.description.toLowerCase().includes(lowerCaseSearchTerm) ||
      project.tags.some((tag) => 
        tag.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
    setFilteredProjects(matchedProjects);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <TransitionGroup className="project-list">
        {filteredProjects.map((project, index) => (
          <CSSTransition 
            key={project.id}
            timeout={500} 
            classNames="item"
          >
            <ProjectContainer
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ProjectList;
