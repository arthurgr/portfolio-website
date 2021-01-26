import React from 'react';
import classNames from "classnames";

const Skills = () => {
    return (
        <section id="skills" className={classNames(["list"])}>
            <svg className={classNames(["skills-icon","color"])} height="32" width="32">
                <g id="skills-icon">
                    <g>
                        <path d="M14,2v11H2V2H14 M16,0H0v15h16V0L16,0z"/>
                    </g>
                    <rect x="4" y="4" width="8" height="1"/>
                    <rect x="4" y="7" width="8" height="1"/>
                    <rect x="4" y="10" width="8" height="1"/>
                </g>
            </svg>
            <h2 className={classNames(["resumeSection","color"])}>Skills</h2>
            <ul id="skills">
                <li className={classNames(["skill"])}>
                    <h3 className={classNames(["title"])}>Javascript</h3>
                    <h3 className={classNames(["subtitle"])}>React / Node / NPM / Webpack / Snowpack / Gulp / Storybook</h3>
                </li>
            </ul>
            <ul id="skills">
                <li className={classNames(["skill"])}>
                    <h3 className={classNames(["title"])}>Testing</h3>
                    <h3 className={classNames(["subtitle"])}>Jest / Enzyme / Postman</h3>
                </li>
            </ul>
            <ul id="skills">
                <li className={classNames(["skill"])}>
                    <h3 className={classNames(["title"])}>Other Languages</h3>
                    <h3 className={classNames(["subtitle"])}>GIT / PHP / SCSS / SASS / CSS / Linux / Accessibility / HTML5 Semantic Elements</h3>
                </li>
            </ul>
            <ul id="skills">
                <li className={classNames(["skill"])}>
                    <h3 className={classNames(["title"])}>Application Planning</h3>
                    <h3 className={classNames(["subtitle"])}>Product Design / UX Design & Research / User Interactions / UI Architecture</h3>
                </li>
            </ul>
            <ul id="skills">
                <li className={classNames(["skill"])}>
                    <h3 className={classNames(["title"])}>Design Systems</h3>
                    <h3 className={classNames(["subtitle"])}>Bootstrap / Material UI / US Design Systems</h3>
                </li>
            </ul>
            <ul id="skills">
                <li className={classNames(["skill"])}>
                    <h3 className={classNames(["title"])}>Design Tools</h3>
                    <h3 className={classNames(["subtitle"])}>Adobe XD / Photoshop / Illustrator / Sketch / Figma</h3>
                </li>
            </ul>
        </section>
    );
}

export default Skills;