import React from 'react';
import Experience from './elements/Experience';
import Education from './elements/Education';
import Skills from './elements/Skills';
import Contact from './elements/Contact';
import ReactGA from 'react-ga';
import './resume.scss';

const Resume = () => {
    ReactGA.set({
        page: "Resume"
    });
    ReactGA.send("pageview");
    return (
        <>
            <Experience />
            <Education />
            <Skills />
            <Contact />
        </>
    );
}

export default Resume;