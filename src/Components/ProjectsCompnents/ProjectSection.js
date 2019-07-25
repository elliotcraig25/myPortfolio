import React from 'react';
import './ProjectSection.scss';

import ProjectCard from './ProjectCards/ProjectCard';
import ClassCastImg from '../../assets/AppScreenShots/classCast.png';

import text from '../../assets/Text/text';

const ProjectSection = () => {
    return (
        <div className='project_section'>
            <h1>MY PROJECTS</h1>
            <div className='container_of_cards'>
                <ProjectCard
                    project='CLASS CAST'
                    liveUrl='https://classcast.live'
                    image={ClassCastImg}
                    learnMoreUrl='/projects/classcast/'
                    description={text.classCast}
                />
                <ProjectCard
                    project='MAKE YOUR OWN ADVENTURE'
                    liveUrl='https://makeyourownchooseyourownadventure.com'
                    image=''
                    learnMoreUrl='/projects/makeyourownadventure/'
                    description={text.MakeYourOwnAdventure}
                />
                <ProjectCard
                    project='MINI PROJECTS'
                    liveUrl='/projects/miniprojects/'
                    image=''
                    learnMoreUrl='/projects/miniprojects/'
                    description={text.miniProjects}
                />
            </div>
        </div>
    )
}

export default ProjectSection;