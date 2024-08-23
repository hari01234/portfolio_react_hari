import { useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './EducationContent.css';

const experience = [
    {
        year: "2019",
        degree: "10th Standard",
        school: "Devanagar Hr Sec School",
        location: "Aruppukottai",
        percentage: "81.60%"
    },
    {
        year: "2021",
        degree: "12th Standard",
        school: "SBK Hr Sec School",
        location: "Aruppukottai",
        percentage: "87%"
    },
    {
        year: "2021-2025",
        degree: "Bachelor of Computer Science and Engineering",
        school: "AAA College of Engineering and Technology",
        location: "Amathur",
        cgpa: "7.60 /10"
    },
];

function EducationContent() {
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

        const educationHeading = document.querySelector('.education-heading');

        const years = document.querySelectorAll('.year');
        const degrees = document.querySelectorAll('.degree');
        const schools = document.querySelectorAll('.school');
        const locations = document.querySelectorAll('.location');
        const cgpas = document.querySelectorAll('.cgpa');
        const percentages = document.querySelectorAll('.percentage');

        if (educationHeading) {
            observer.observe(educationHeading);
        }
        years.forEach((year) => observer.observe(year));
        degrees.forEach((degree) => observer.observe(degree));
        schools.forEach((school) => observer.observe(school));
        locations.forEach((location) => observer.observe(location));
        cgpas.forEach((cgpa) => observer.observe(cgpa));
        percentages.forEach((percentage) => observer.observe(percentage));

        return () => {
            if (educationHeading) {
                observer.unobserve(educationHeading);
            }
            years.forEach((year) => observer.unobserve(year));
            degrees.forEach((degree) => observer.unobserve(degree));
            schools.forEach((school) => observer.unobserve(school));
            locations.forEach((location) => observer.unobserve(location));
            cgpas.forEach((cgpa) => observer.unobserve(cgpa));
            percentages.forEach((percentage) => observer.unobserve(percentage));
        };
    }, []);

    return (
        <div className="education-content">
            <motion.h1
                initial={{ x: -100, opacity: 0 }} // Initial state
                whileInView={{ x: 0, opacity: 1 }} // Animation on enter
                transition={{ duration: 0.5 }} // Transition properties
                className="education-heading">
                Education
            </motion.h1>

            <div className="education-container">
                {experience.map((content, index) => (
                    <div key={index} className="education-item">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="degree">
                            {content.degree}
                        </motion.h1>
                        <div className="school-content">
                            <motion.h1
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="school">
                                {content.school}
                            </motion.h1>
                            <motion.h1
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}
                                className="year">
                                {content.year}
                            </motion.h1>
                            <motion.h1
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 * index }}
                                className="location">
                                {content.location}
                            </motion.h1>
                            {content.cgpa && (
                                <motion.h1
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 * index }}
                                    className="cgpa">
                                    {content.cgpa}
                                </motion.h1>
                            )}
                            {content.percentage && (
                                <motion.h1
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 * index }}
                                    className="percentage">
                                    {content.percentage}
                                </motion.h1>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EducationContent;
