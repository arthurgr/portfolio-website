import React from 'react';
import Header from './components/header/Header';
import Resume from './components/resume/Resume';
import classNames from "classnames";
import ReactGA from 'react-ga';
import './components/utilities/scss/reset.scss'
import "./components/utilities/scss/base.scss"

ReactGA.initialize('UA-46448219-1');
 
const App = () => {
    return (
        <>
            <Header />
            <div id="content">
                <div id="main">
                    <div className={classNames(["inside"])}>
                        <Resume />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;