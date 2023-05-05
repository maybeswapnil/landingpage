import React from 'react';
import Project from './Project'
import './Project.scss'
function ProjectCard(props) {
    return (
            <a href={props.key}>
                <Project
                    url={props.url}
                    name={props.name}
                    description={props.description}
                    descriptionpara={props.descriptionpara} />
            </a>
    );
}

function ProjectList(props) {
    const projectCards = props.data.projects.map((project) => (
        <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            descriptionpara={project.descriptionpara}
            url={project.url}
        />
    ));

    return  <div className='about-project-main-div'>{projectCards}</div>;
}

export default ProjectList;
