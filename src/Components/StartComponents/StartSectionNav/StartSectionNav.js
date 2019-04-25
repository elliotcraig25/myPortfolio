import React from 'react';
import './StartSectionNav.scss';

// import {NavLink} from 'react-router-dom';

const StartSectionNav = () => {
    return (
        <div className='start_section_nav'>
            <nav>
                <a href="#start">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    )
}

export default StartSectionNav;