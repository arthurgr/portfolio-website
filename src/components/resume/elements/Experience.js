import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="list">
            <svg className="experience-icon color" height="32" width="32">
                <g id="experience-icon">
                    <g>
                        <path className="st5" d="M14,5v9H2V5H14 M16,3H0v13h16V3L16,3z"/>
                    </g>
                    <g>
                        <path className="st5" d="M10,2v1H6V2H10 M12,0H4v5h8V0L12,0z"/>
                    </g>
                    <rect y="9" className="st5" width="16" height="1"/>
                    <rect x="5.5" y="8" className="st5" width="5" height="3"/>
                </g>
            </svg>
            <h2 className="resumeSection color">Experience</h2>
            <ul id="experiences">
                <li className="experience">
                    <h3 className="title">UI/UX Front-End Developer</h3>
                    <h3 className="subtitle">Douglas County Schools</h3>
                    <h3 className="time">Castle Rock, CO</h3>
                    <h3 className="time">Dec 2015 - Present</h3>
                    <div className="description"><p>Collaborate closely with engineers, stakeholders, and product managers throughout the lifecycle of application planning, design, development, and testing. Determine application or feature success based on stakeholder feedback.</p></div>
                </li>
                <li className="experience">
                    <h3 className="title">UI/UX Developer</h3>
                    <h3 className="subtitle">Blackboard Technology and Solutions</h3>
                    <h3 className="time">Denver, CO</h3>
                    <h3 className="time">Oct 2011 - Sept 2015</h3>
                    <div className="description"><p>Generated prototypes and UI deliverables including wireframes, flowcharts, screen mock-ups, and interface specifications. Designed and developed components and features that integrated into multiple Blackboard software platforms.</p></div>
                </li>
                <li className="experience">
                    <h3 className="title">Front End Designer/Developer</h3>
                    <h3 className="subtitle">SchoolCenter An Edline Solution</h3>
                    <h3 className="time">Carbondale, IL</h3>
                    <h3 className="time">Mar 2008 - Oct 2011</h3>
                    <div className="description"><p>Created and developed wire-frames, mockups, and high fidelity designs based on product managers business requirements. Established branding, media, and website designs for school districts across the U.S. Converted Abobe Flash websites to Responsive HTML alternatives, ensuring that sites could be viewed on all devices.</p></div>
                </li>
            </ul>
        </section>
    );
}

export default Experience;