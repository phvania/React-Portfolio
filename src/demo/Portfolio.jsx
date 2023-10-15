import React from "react";
import projectData from '../projectData/index';
//import projectImage from '../assets/project.jpg'
//import { GITHUB_USERNAME } from './root.link';
//import { Container, Row, Col } from "react-bootstrap";
//import ProjectCard from "./ProjectCards";
const Portfolio = () => {

    const style={
        diplay:'flex',
        justifyContent: 'space-between',
        width: '100%'
    }
    
    return (
      <div id="Projects">
        <section className='my-28 px-5' id='projects'>
          <header className='text-2xl font-bold pt-10'>
            <h2>Projects</h2>
          </header>
          <div className='my-7 space-y-24' style={style}>
            {projectData.map((project) => (
              <article className='flex flex-wrap md:justify-between md:items-center'>
                <picture >
                  <img src={project.image}  />
                </picture>
                <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                  <h3 className='uppercase font-bold text-lg'>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className='w-auto flex space-x-5 relative '>
                    <a href={project.github} target='_blank' rel='noreferrer'>
                      Github Repo
                    </a>
                    <p></p>
                    <a href={project.link} target='_blank' rel='noreferrer'>
                      Deployed Link
                    </a>
                  </div>
                  
                </div>
            </article>
            ))}
          </div>
        </section>
        <div className='mx-5'>
          <a href={`https://github.com/phvania`} target='_blank' rel='noreferrer' className='bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto'>
            <span>See more on Github</span>
          </a>
        </div>
      </div>
    );
  };
  

export default  Portfolio;