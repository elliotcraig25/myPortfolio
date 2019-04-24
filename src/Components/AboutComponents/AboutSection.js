import React from 'react';
import './AboutSection.scss';

import text from '../../assets/Text/text';

const AboutSection = () => {
    return (
        <div className='about_container'>
            <div className='divider_top'></div>
            <h1>ABOUT ME</h1>
            <p>
                {text.aboutMeText}
            </p>
            <div className='divider_bottom'></div>
        </div>
    )
}

export default AboutSection;