import React from 'react';
import classNames from "classnames";

const Education = () => {
    return (
        <section id="education" className={classNames(["list"])}>
            <svg className={classNames(["education-icon","color"])} height="32" width="32">
                <g id="education-icon">
                    <rect y="15" width="17" height="2"/>
                    <g>
                        <path d="M8.5,2.6L11.4,5H5.6L8.5,2.6 M8.5,0L0,7h17L8.5,0L8.5,0z"/>
                    </g>
                    <rect x="2" y="7" width="1" height="8"/>
                    <rect x="14" y="7" width="1" height="8"/>
                    <rect x="6" y="7" width="1" height="8"/>
                    <rect x="10" y="7" width="1" height="8"/>
                </g>
            </svg>
            <h2 className={classNames(["resumeSection","color"])}>Education</h2>
            <ul id="educations">
                <li className={classNames(["education"])}>
                    <h3 className={classNames(["title"])}>Southern Illinois University - Carbondale</h3>
                    <h3 className={classNames(["subtitle"])}>Bachelor in Fine Arts, Communication Design</h3>
                    <h3 className={classNames(["time"])}>2004 - 2008</h3>
                </li>
            </ul>
        </section>
    );
}

export default Education;