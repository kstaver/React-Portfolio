import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCards(props){
    return(
        <div className="card">
            <div className="img-container">
                <img alt="{props.name}" src={props.image}/>
            </div>
            <div className="content">
                <p className="card-title">{props.name}</p>
                <p class="proj-icons-container">
                    <a href={props.github}><img class="project-icon" src="" alt=""/></a>
                    <a href={props.deploy}><img class="project-icon" src="" alt=""/></a>
                </p>
                <p class="topics">
                    ({props.topics})
                </p>
            </div>
        </div>
    );
}

export default ProjectCards;