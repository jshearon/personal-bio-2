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
      <section className="d-flex flex-row flex-wrap justify-content-around">
        <img src="/images/pocket-piggy-ss.gif"  alt="Pocket Piggy" className="frame-image" />
        <div className="project-text text-left">
        <h2 className="project-title">Pocket Piggy</h2>
          <p className="project-description">A mobile app that lets parents and kids manage money together. Parents can add funds to kid's accounts and add chores, 
          and kids can make wishlists, accept chores and ask permission to buy the things with the money in their account.</p>
          <div className="d-flex flex-row justify-content-between w-100 align-items-center">
            <span className="mr-3 project-links"><FontAwesomeIcon icon={faGithub} /><a className="ml-2" href="https://github.com/jshearon/pocket-piggy">Code</a></span>
            <span className="mr-3 project-links"><FontAwesomeIcon icon={faChrome} /><a className="ml-2" href="https://pp-demo-frame.web.app/">Demo</a></span>
            <div className="project-badges d-flex flex-row justify-content-between w-50 ml-auto">
              <img src="/images/html5.svg" alt="tech badge" className="techbadge" />
              <img src="/images/css3.svg" alt="tech badge" className="techbadge" />
              <img src="/images/sass.svg" alt="tech badge" className="techbadge" />
              <img src="/images/javascript.svg" alt="tech badge" className="techbadge" />
              <img src="/images/react.svg" alt="tech badge" className="techbadge" />
              <img src="/images/firebase.svg" alt="tech badge" className="techbadge" />
            </div>
          </div>
        </div>
      </section>

      {projectList.map((project) => {
        return (
      <section className="d-flex flex-row flex-wrap justify-content-around">
        <div className="browser-container">
          <div className="browser-row d-flex justify-content-start align-items-center">
              <span className="browser-dot browser-dot1"></span>
              <span className="browser-dot browser-dot2"></span>
              <span className="browser-dot browser-dot3"></span>
              <div className="search-box text-left">{project.url}</div>
          </div>

          <div className="browser-content">
            <img src={`/images/${project.image}`}  alt={project.title} className="frame-image" />
          </div>
        </div>

        <div className="project-text text-left">
        <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <div className="d-flex flex-row justify-content-between w-100 align-items-center">
            <span className="mr-3 project-links"><FontAwesomeIcon icon={faGithub} /><a className="ml-2" href={project.code}>Code</a></span>
            <span className="mr-3 project-links"><FontAwesomeIcon icon={faChrome} /><a className="ml-2" href={project.url}>Demo</a></span>
            <div className="project-badges d-flex flex-row justify-content-between w-50 ml-auto">
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
