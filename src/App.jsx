import { useEffect, useRef, useState } from "react";
// import { motion } from 'framer-motion';
import "./App.css";
import { ReactTyped } from "react-typed";
import LinkedInIcon from "./components/icons/LinkedInIcon";
import GitHubIcon from "./components/icons/GitHubIcon";

import ProjectContent from "./components/ProjectContent";
import EducationContent from "./components/EducationContent";
import TechContent from "./components/TechContent";
import ParticleBg from "./components/ParticleBg";

import ProgrammerImg from './assets/programmer.png'
// import gsap from "gsap"
// import { SplitType } from 'split-type'

import ContactContent from "./components/ContactContent";
import { Element, Link } from "react-scroll";

import pdf from "./assets/it_haricv.pdf"

function App() {
  const cursorRef = useRef(null)
  const [cursorVariant, setCursorVariant] = useState('default');

  // const [isLinkedIconHovered, setLinkedIconHovered] = useState(false);
  // const [isGitHubIconHovered, setGitHubIconHovered] = useState(false);
  const [isEmailHovered, setEmailHovered] = useState(false)
  const mouseMove = (e) => {
    const cursor = cursorRef.current;
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  };
  useEffect(() => {

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // useEffect(() => {
  //   new SplitType('#description', {
  //     type: 'lines'
  //   });

  //   gsap.from('#description .line', {
  //     y: '100%',
  //     opacity: 1,
  //     duration: 0.65,
  //     ease: 'back.out',
  //     stagger: 0.15,

  //   })

  //   new SplitType('#hi-intro', {
  //     type: 'lines'
  //   });

  //   gsap.from('#hi-intro .line', {
  //     y: '100%',
  //     opacity: 1,
  //     duration: 0.65,
  //     ease: 'back.out',
  //     stagger: 0.15,

  //   })

  //   new SplitType('#name', {
  //     type: 'words'
  //   });

  //   gsap.from('#name .word', {
  //     y: '100%',
  //     opacity: 1,
  //     duration: 0.65,
  //     ease: 'power1.out',
  //     stagger: 0.15,

  //   })
  //   new SplitType('#name', {
  //     type: 'words'
  //   });

  //   gsap.from('#name .word', {
  //     y: '100%',
  //     opacity: 1,
  //     duration: 0.60,
  //     ease: 'power1.out',
  //     stagger: 0.10,

  //   })

  // }, []);

  const handleMouseEnter = () => setCursorVariant('text');
  const handleMouseLeave = () => setCursorVariant('default');


  const resumeDownload = () =>{
      fetch(pdf).then((response) =>{
        response.blob().then((blob)=>{
          const url = window.URL.createObjectURL(blob);

          let link = document.createElement('a');
          link.href = url;
          link.download = 'it_haricv.pdf';
          link.click();

        });
      });

  }

  return (
    <>
      <div className="App">
 
        <ParticleBg className="particles" />
        <div ref={cursorRef} className={`cursor ${cursorVariant}`} ></div>

        <div className="nav-content">
          <ul className="nav-ul">
            <Link to="education" offset={-150} className="nav-li"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}

            >Education</Link>
            <Link to="projects" offset={-150} className="nav-li"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >Projects</Link>
            <Link to="contact" offset={-100} className="nav-li"

              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              Contact</Link>

            {/* <a href={pdf} className="btn-resume"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} download>Resume </a> */}
            <button className="btn-resume" onClick={resumeDownload} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >Resume </button>


          </ul>
        </div>



        <div className="left-icons">
          <div className="icons">
            <div
              className="icon"

              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                window.open('https://www.linkedin.com/in/hariharan-n-65a400224/', '_blank').focus();
              }}
            >
              <LinkedInIcon />
            </div>
            <div
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                window.open('https://github.com/hari01234', '_blank').focus();
              }}
            >
              <GitHubIcon />
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="right-icons">
          <div
            className="email"
            onMouseEnter={() => {
              setCursorVariant("text");
              setEmailHovered(true);
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
              setEmailHovered(false);
            }}
            onClick={() => {
              window.open('mailto:hari29734@gmail.com').focus();
            }}
          >

            Hariharan@gmail.com
          </div>
          <div className="line" style={
            {
              marginTop: isEmailHovered ? 162 : 150,
            }
          }></div>
        </div>


        <div className="content">
          <div className="intro">
            <div className="left-intro">
              <div
                // variants={animationVariants(0.5)}
                // initial='hidden'
                // animate='show'
                id="hi-intro">Hi everyone. I am</div>
              <div
                onMouseEnter={
                  handleMouseEnter
                }
                onMouseLeave={
                  handleMouseLeave
                }
                id="name"
              > HARIHARAN N</div>
              <div id="roles">
                <span>{">"}</span>
                <ReactTyped

                  strings={
                    roles
                  }
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
              </div>
              <p id="description">{description2}</p>
            <button className="btn-resume-intro" onClick={resumeDownload} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>My Resume</button>

            </div>
            <div className="right-img">
              <img src={ProgrammerImg} alt="programmer" />
            </div>
          </div>



          <TechContent />




          <Element name="education">
            <EducationContent />
          </Element>


          <Element name="projects">
            <ProjectContent onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}

            />
          </Element>

          <Element name="contact">
            <ContactContent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          </Element>


        </div>

      </div>
    </>
  );
}

const roles = ["Java Developer", "Python Developer", "UI/UX Designer","Web Developer"];
const description2 ="I am well-versed in several programming languages like Java, Python, Node.js, C, and C++. With a passion for software development, I enjoy tackling challenges and crafting innovative solutions.";

const description = "I speak the languages of machines, from Java, Python, C and C++.'m always up for the challenge. Let's build something awesome together!  💻✨";

// const animationVariants = (delay) => ({
//   hidden: {
//     x: -100,
//     opacity: 0
//   },

//   show: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5, delay: delay
//     }
//   }

// });



// const techIconVariants = (duration) => ({
//   initial: {
//     y: -10
//   },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: 'linear',
//       repeat: Infinity,
//       repeatType: 'reverse'
//     }
//   }
// });

export default App;
