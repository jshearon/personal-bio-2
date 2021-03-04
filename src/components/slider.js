import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'
import ProjectList from './projects.json';
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const projectList = ProjectList;

  return (
    <Slider {...settings}>

      {projectList.map((project) => {
        return (
      <section className="d-flex flex-wrap justify-content-center align-items-center project-section">
        <img src={project.image.includes('http') ? project.image : `/images/${project.image}`}  alt={project.title} className="frame-image" />
        <div className="project-text text-left">
          <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="d-flex flex-row flex-wrap justify-content-start align-items-center">
              <div className="mr-3 project-links"><a className="m-auto" href={project.code}><FontAwesomeIcon icon={faGithub} /> Code</a></div>
              <div className="mr-3 project-links"><a className="m-auto" href={project.url}><FontAwesomeIcon icon={faChrome} /> Demo</a></div>
              <div className="project-badges d-flex flex-row justify-content-between w-100 mt-3">
                {
                  project.tech.map((technology) => {
                    return (<img src={`/images/${technology}.svg`} alt="tech badge" className="techbadge" />)
                  })
                }
              </div>
            </div>
        </div>
      </section>
        )
    })
  }
    </Slider>
  );
}
