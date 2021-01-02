import React from 'react';
import { useSpring, animated } from 'react-spring';
import classNames from "classnames";
import './header.scss';
import img from "../../img/photo.jpg";

const Header = () => {
    const calc = (x, y) => [x - window.innerWidth / 3, y - window.innerHeight / 3];
    const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 15}px,0)`;
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    
    return (
        <div className={classNames(["color-background","container"])} id="side" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <div id="top">
                <div className={classNames(["inside"])}>
                    <div id="profile-pic">
                        <img id="profile-pic-img" src={img} alt="Photo of Arthur Revelski" />
                    </div>
                    <h1 id="name">Arthur Revelski</h1>
                    <h2 id="current-position"><b>UI/UX Developer - React JS</b></h2>
                    <h2 id="current-location"><b>Lakewood, CO</b></h2>
                    <p id="about">I’m passionate about designing and developing intuitive user interfaces. I enjoy trying out new recipes, exploring the Colorado mountains, and staying active.</p>
                    <ul className={classNames(["subContact"])}>
                    <li>
                        <a href="mailto:arevelski@gmail.com" title="Email Arthur" ><b>Email Arthur</b></a>
                    </li>
                    <li>
                        <a href="https://github.com/arthurgr" title="Code Examples" target="_blank"><b>Github</b></a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/arthurrevelski" title="Design Work" target="_blank"><b>Dribble</b></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/arthur-revelski-75894054/" title="Professional Experience" target="_blank"><b>LinkedIn</b></a>
                    </li>
                    </ul>
                </div>
            </div>
            <animated.div className={classNames(["card1"])} style={{ transform: props.xy.interpolate(trans1) }}></animated.div>
        </div>
    );
}

export default Header;