import React from 'react';
import './Landing.scss';

import StartSection from '../../Components/StartComponents/StartSection';
import ProjectSection from '../../Components/ProjectsCompnents/ProjectSection';
import AboutSection from '../../Components/AboutComponents/AboutSection';
import SkillsSection from '../../Components/SkillsComponents/SkillsSection';
import ContactSection from '../../Components/ContactComponents/ContactSection';

import Navbar from '../../Components/Navbar/Navbar';

class Landing extends React.Component {
    constructor() {
        super()
        this.state = {
            navDisplay: 'none'
        }
    }
    scrollFunctionHere = (scroll) => {
        console.log(scroll)
        if (scroll > 735) {
            this.setState({
                navDisplay: 'block'
            })
        } else {
            this.setState({
                navDisplay: 'none'
            })
        }
    }
    render() {
        window.onscroll = () => {
            this.scrollFunctionHere(window.pageYOffset);
        };
        return (
            <div className='body'>
                <Navbar display={this.state.navDisplay} />
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
                <div id="contact">
                    <ContactSection />
                </div>
                <div id='footer'>

                </div>
            </div>
        )
    }
}

export default Landing;