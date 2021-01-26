import React from 'react';
import classNames from "classnames";

const Contact = () => {
    return (
        <section id="contact" className={classNames(["list"])}>
            <svg className={classNames(["contact-icon","color"])} height="32" width="32">
                <g id="contact-icon">
                    <rect y="15" width="15" height="2"/>
                    <path d="M2,17v-5c0-1.7,1.3-3,3-3V7c-2.8,0-5,2.2-5,5v5H2z"/>
                    <path d="M14,17v-5c0-1.7-1.3-3-3-3V7c2.8,0,5,2.2,5,5v5H14z"/>
                    <g>
                        <path d="M8,2c1.1,0,2,0.9,2,2v3c0,1.1-0.9,2-2,2S6,8.1,6,7V4C6,2.9,6.9,2,8,2 M8,0C5.8,0,4,1.8,4,4v3c0,2.2,1.8,4,4,4
                        s4-1.8,4-4V4C12,1.8,10.2,0,8,0L8,0z"/>
                    </g>
                </g>
            </svg>
            <h2 className={classNames(["resumeSection","color"])}>Contact</h2>
            <ul className={classNames(["contact"])}>
                <li><a className={classNames(["color"])} href="mailto:arevelski@gmail.com" rel="noopener"><b>Email Arthur</b></a></li>
                <li><a className={classNames(["color"])} href="https://github.com/arthurgr" target="_blank" rel="noopener"><b>Github</b></a></li>
                <li><a className={classNames(["color"])} href="https://dribbble.com/arthurrevelski" target="_blank" rel="noopener"><b>Dribble</b></a></li>
                <li><a className={classNames(["color"])} href="https://www.linkedin.com/in/arthur-revelski-75894054/" target="_blank" rel="noopener"><b>LinkedIn</b></a></li>
                <li><a className={classNames(["color"])} href="Arthur_Revelski_Resume.docx" target="_blank" rel="noopener" download><b>Resume</b></a></li>
            </ul>
        </section>
    );
}

export default Contact;