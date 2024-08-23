import JavaIcon from '../assets/java.svg'
import PythonIcon from '../assets/python.svg'
import HtmlIcon from '../assets/html.svg'
import CssIcon from '../assets/css.svg'
import ReactIcon from '../assets/react.svg'
import NodeJsIcon from '../assets/nodejs.svg'
import MongoDbIcon from '../assets/mongodb.svg'
import MysqlIcon from '../assets/mysql.svg'
import VscodeIcon from '../assets/vscode.svg'
import GitIcon from '../assets/git.svg'
import UbuntuIcon from '../assets/ubuntu.svg'
import FigmaIcon from '../assets/figma.svg'
import AdobeXd from '../assets/adobexd.svg'
import './TechContent.css';
import js from '../assets/js.svg'
import { useEffect } from "react";
// import TechIcon from "./icons/TechIcon";

function TechContent() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.5 });

        const techHeading = document.querySelector('.tech-heading');
        const techContainer = document.querySelector('.tech-container');

        if (techHeading) {
            observer.observe(techHeading);
        }
        if (techContainer) {
            observer.observe(techContainer);
        }

        return () => {
            if (techHeading) {
                observer.unobserve(techHeading);
            }
            if (techContainer) {
                observer.unobserve(techContainer);
            }
        }
    }, []);

    const generateRandomDuration = () => `${(Math.random() * 5 + 1).toFixed(2)}s`;

    const techIcons = [
        { imageUrl: JavaIcon, alt: "java" },
        { imageUrl: PythonIcon, alt: "python" },
        { imageUrl: HtmlIcon, alt: "html" },
        { imageUrl: CssIcon, alt: "css" },
        { imageUrl: ReactIcon, alt: "react" },
        { imageUrl: NodeJsIcon, alt: "nodejs" },
        { imageUrl: MongoDbIcon, alt: "mongodb" },
        { imageUrl: MysqlIcon, alt: "mysql" },
        { imageUrl: VscodeIcon, alt: "vscode" },
        { imageUrl: GitIcon, alt: "git" },
        { imageUrl: UbuntuIcon, alt: "ubuntu" },
        { imageUrl: FigmaIcon, alt: "figma" },
        { imageUrl: AdobeXd, alt: "adobexd" },
        { imageUrl: js, alt: "js" },
    ];

    return (
        <div className="tech-content">
            <h1 className="tech-heading">Technologies</h1>
            <div className="tech-container">
                {techIcons.map((icon, index) => (
                    <div key={index} className="tech-icon-wrapper">
                        <div className="tech-icon" style={{ animationDuration: generateRandomDuration() }}>
                            <img src={icon.imageUrl} alt={icon.alt} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechContent;
