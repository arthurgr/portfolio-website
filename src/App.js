import React from 'react';
import Header from './components/header/Header';
import Resume from './components/resume/Resume';
import Clearfix from './components/utilities/clearfix/Clearfix';
import classNames from "classnames";
import ReactGA from 'react-ga';
import './components/utilities/scss/reset.scss'
import "./components/utilities/scss/base.scss"

ReactGA.initialize('UA-46448219-1');
 
const App = () => {
    return (
        <>
            <Header />
            <div id="resume">
                <div id="main">
                    <div className={classNames(["inside"])}>
                        <Resume />
                        <Clearfix />
                    </div>
                    <Clearfix />
                </div>
            </div>
            <Clearfix />
        </>

    );
}

export default App;