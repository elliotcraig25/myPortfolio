import React from 'react';
import './StartSection.scss';

import StartSectionNav from './StartSectionNav/StartSectionNav';
import StartSectionArrow from './StartSectionArrow/StartSectionArrow';

const StartSection = () => {
    return (
        <div className='start_section'>
            <StartSectionNav />
            <div className='name_banner'>
                <h1>ELLIOT CRAIG</h1>
                <p>Full Stack Web Developer</p>
            </div>
            <StartSectionArrow />
        </div>
    )
}

export default StartSection;