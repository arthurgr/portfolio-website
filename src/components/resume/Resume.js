import React from 'react';
import Experience from './elements/Experience';
import Education from './elements/Education';
import Skills from './elements/Skills';
import Contact from './elements/Contact';
import './resume.scss';

const Resume = () => {
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