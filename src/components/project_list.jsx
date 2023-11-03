
import React, { useState } from 'react';
import SearchBar from './searchbar';
import ProjectContainer from './project_box';

const ProjectList = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (searchTerm) => {
    const matchedProjects = projects.filter((project) =>
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredProjects(matchedProjects);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {filteredProjects.map((project, index) => (
        <ProjectContainer
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </div>
  );
};

export default ProjectList;
