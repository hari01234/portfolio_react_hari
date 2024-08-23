// import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import agegenImg from '../assets/agegen.jpg';
import webImg from '../assets/web.jpg';
import propTypes from 'prop-types'
import uiux from '../assets/uiux.jpg';

import JavaIcon from '../assets/java.svg'
import MysqlIcon from '../assets/mysql.svg'
import PythonIcon from'../assets/python.svg';
import DataScience from '../assets/datascience.svg';
import CSS from '../assets/css.svg';
import Html from '../assets/html.svg';
import JS from '../assets/js.svg';
import Figma from '../assets/figma.svg';


import './ProjectContent.css';
import { motion } from 'framer-motion'
// import { useEffect } from 'react';

function ProjectContent({ onMouseEnter, onMouseLeave }) {

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('in-view');
    //             } else {
    //                 entry.target.classList.remove('in-view');
    //             }
    //         });
    //     });

    //     const projectHeading = document.querySelector('.project-heading');
    //     const cards = document.querySelectorAll('.card')
    //     if (projectHeading) {
    //         observer.observe(projectHeading);
    //     }
    //     cards.forEach((card, index) => {
    //         // card.style.transitionDelay = `${index * 2}s`;
    //         observer.observe(card);
    //     })


    //     return () => {
    //         if (projectHeading) {
    //             observer.unobserve(projectHeading);
    //         }

    //         cards.forEach((card) => {
    //             observer.unobserve(card);
    //         });
    //     };
    // }, []);

    return (
        <div className="project-content">
            <motion.h1
                whileInView={
                    {
                        opacity: 1,
                        x: 0

                    }
                }

                initial={{
                    opacity: 0,
                    x: -100,
                }}
                transition={{ duration: 0.2 }}

                className="project-heading">
                Projects
            </motion.h1>

            <div className="cards-container">



                <motion.div
                    whileInView={
                        {
                            opacity: 1,
                            y: 0

                        }
                    }

                    initial={{
                        opacity: 0,
                        y: 100,
                    }}

                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <ProjectCard
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                        title="Age and Gender Identification"
                        imageSrc={agegenImg}
                        className='card'
                        description='An age and gender identifier is a
 technology or system that uses various algorithms and data
 analysis techniques to estimate the age and gender of
 individuals based onfacial features, such as their facial
 structure, skin texture, and other visual attributes. It is a part
 of facial recognition technology to identify and
 categorize specific information from images or
 video feeds. '
                        skills={[PythonIcon,DataScience]}
                        onClick={() => {
                            window.open('https://github.com/hari01234', '_blank').focus();
                        }}
                    />
                </motion.div>
                <motion.div
                    whileInView={
                        {
                            opacity: 1,
                            y: 0

                        }
                    }

                    initial={{
                        opacity: 0,
                        y: 100,
                    }}

                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <ProjectCard
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                        title="Create Web Page with Python and SQL Database
Integration"
                        imageSrc={webImg}
                        className='card'
                        description='Developed a dynamic web page using Python for backend logic.
Integrated with a SQL database for data storage and
retrieval.
Designed and implemented front-end components
using HTML, CSS, and JavaScript.
Ensured seamless interaction between front-end and
back-end components for efficient data handling and
user interaction'
                        skills={[PythonIcon,Html,CSS,JS,MysqlIcon]}
                        onClick={() => {
                            window.open('https://github.com/hari01234', '_blank').focus();
                        }} />
                </motion.div>
                <motion.div
                    whileInView={
                        {
                            opacity: 1,
                            y: 0

                        }
                    }

                    initial={{
                        opacity: 0,
                        y: 100,
                    }}

                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <ProjectCard
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                        title="UI/UX Projects"
                        imageSrc={uiux}
                        className='card'
                        description=' * User-Centered Design  
                                      * Responsive Layout
                                      * Interactive Prototyping
                                      * Visual Design
                                      * Accessibility '
                        skills={[Figma]}
                        onClick={() => {
                            window.open('https://github.com/hari01234/figma_projects', '_blank').focus();
                        }}
                    />
                </motion.div>

                
                
            </div>
        </div >
    );
}

ProjectContent.propTypes = {
    onMouseEnter: propTypes.func,
    onMouseLeave: propTypes.func

}
export default ProjectContent;
