import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="list">
            <svg className="contact-icon color" height="32" width="32">
                <g id="contact-icon">
                    <rect y="15" className="st5" width="15" height="2"/>
                    <path className="st5" d="M2,17v-5c0-1.7,1.3-3,3-3V7c-2.8,0-5,2.2-5,5v5H2z"/>
                    <path className="st5" d="M14,17v-5c0-1.7-1.3-3-3-3V7c2.8,0,5,2.2,5,5v5H14z"/>
                    <g>
                        <path className="st5" d="M8,2c1.1,0,2,0.9,2,2v3c0,1.1-0.9,2-2,2S6,8.1,6,7V4C6,2.9,6.9,2,8,2 M8,0C5.8,0,4,1.8,4,4v3c0,2.2,1.8,4,4,4
                        s4-1.8,4-4V4C12,1.8,10.2,0,8,0L8,0z"/>
                    </g>
                </g>
            </svg>
            <h2 className="resumeSection color">Contact</h2>
            <ul className="contact">
                <li><a className="color" href="mailto:arevelski@gmail.com"><b>Email Arthur</b></a></li>
                <li><a className="color" href="https://github.com/arthurgr" target="_blank"><b>Github</b></a></li>
                <li><a className="color" href="https://dribbble.com/arthurrevelski" target="_blank"><b>Dribble</b></a></li>
                <li><a className="color" href="https://www.linkedin.com/in/arthur-revelski-75894054/" target="_blank"><b>LinkedIn</b></a></li>
            </ul>
        </section>
    );
}

export default Contact;