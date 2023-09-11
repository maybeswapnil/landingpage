import React from 'react';
import Project from './Project'
import './Project.scss'

function ProjectCard(props) {
    return (
            <a href={props.url}>
                <Project
                    url={props.url}
                    index={props.index}
                    name={props.name}
                    description={props.description}
                    descriptionpara={props.descriptionpara} />
            </a>
    );
}

function ProjectList(props) {
    const projectCards = props.data.projects.map((project, i) => (
        <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            descriptionpara={project.descriptionpara}
            url={project.url}
            index={i}
        />
    ));

    return  <div className='about-project-main-div'>{projectCards}</div>;
}

export default ProjectList;
