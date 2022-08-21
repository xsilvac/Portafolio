import React from 'react';
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Projects = ({image, title, name, github, web, description}) => {
  return (
    <div className="containerProjects">
      <h2>{title}</h2>
      <article className="card">
        <img className="imgProjects" src={image} alt="san francisco"/>
        <div className="hover">
          <h2>{name}</h2>
          <p>{description}</p>
          <div className="links">
            <a target="_blank" href={web} rel="noreferrer"><TbWorld/></a>
            <a target="_blank" href={github} rel="noreferrer"><FaGithub/></a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Projects