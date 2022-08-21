import React from 'react';
import {Link} from 'react-router-dom';

const Projects = ({image, title}) => {
  return (
    <div className="child-page-listing">
 
  <h2>Our Locations</h2>
 
  <article className="location-listing">
    <Link className="location-title" to="#">{title}</Link>
    <div className="location-image">
      <Link to="#">
        <img className="imgProjects" src={image} alt="san francisco"/>
      </Link>
    </div>
  </article>
  
</div>
  )
}

export default Projects