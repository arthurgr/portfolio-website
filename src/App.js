import React from 'react';
import Header from './components/header/Header';
import Resume from './components/resume/Resume';
import Clearfix from './components/utilities/clearfix/Clearfix';
import './components/utilities/scss/reset.scss'
import "./components/utilities/scss/base.scss"
 
const App = () => {
    return (
        <>
            <Header />
            <div id="resume">
                <div id="main">
                    <div className="inside">
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