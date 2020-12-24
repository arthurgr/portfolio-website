import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="list">
            <svg className="skills-icon color" height="32" width="32">
                <g id="skills-icon">
                    <g>
                        <path className="st5" d="M14,2v11H2V2H14 M16,0H0v15h16V0L16,0z"/>
                    </g>
                    <rect x="4" y="4" className="st5" width="8" height="1"/>
                    <rect x="4" y="7" className="st5" width="8" height="1"/>
                    <rect x="4" y="10" className="st5" width="8" height="1"/>
                </g>
            </svg>
            <h2 className="resumeSection color">Skills</h2>
            <ul id="skills">
                <li className="skill">
                    <h3 className="title">Javascript</h3>
                    <h3 className="subtitle">React / Node / NPM / Webpack / Storybook</h3>
                </li>
            </ul>
            <ul id="skills">
                <li className="skill">
                    <h3 className="title">Testing</h3>
                    <h3 className="subtitle">Jest / Enzyme / Postman</h3>
                </li>
            </ul>
            <ul id="skills">
                <li className="skill">
                    <h3 className="title">Other Languages</h3>
                    <h3 className="subtitle">GIT / PHP / SCSS / SASS / CSS / Linux</h3>
                </li>
            </ul>
            <ul id="skills">
                <li className="skill">
                    <h3 className="title">Application Planning</h3>
                    <h3 className="subtitle">Product Design / UX Design & Research / User Interactions / UI Architecture</h3>
                </li>
            </ul>
            <ul id="skills">
                <li className="skill">
                    <h3 className="title">Design Systems</h3>
                    <h3 className="subtitle">Bootstrap / Material UI / US Design Systems</h3>
                </li>
            </ul>
            <ul id="skills">
                <li className="skill">
                    <h3 className="title">Design Tools</h3>
                    <h3 className="subtitle">Adobe XD / Photoshop / Illustrator / Sketch</h3>
                </li>
            </ul>
        </section>
    );
}

export default Skills;