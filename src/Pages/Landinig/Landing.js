import React from 'react';
import './Landing.scss';

import StartSection from '../../Components/StartComponents/StartSection';
import ProjectSection from '../../Components/ProjectsCompnents/ProjectSection';
import AboutSection from '../../Components/AboutComponents/AboutSection';
import SkillsSection from '../../Components/SkillsComponents/SkillsSection';
import ContactSection from '../../Components/ContactComponents/ContactSection';

const Landing = () => {
    return (
        <div className='body'>
            <div id='start'>
                <StartSection />
            </div>
            <div id='projects'>
                <ProjectSection />
            </div>
            <div id='about'>
                <AboutSection />
            </div>
            <div id='skills'>
                <SkillsSection />
            </div>
            <div id='contact'>
                <ContactSection />
            </div>
            <div id='footer'>

            </div>
        </div>
    )
}

export default Landing;