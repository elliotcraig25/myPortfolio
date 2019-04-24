import React from 'react';
import './SkillsSection.scss';

import htmlIcon from '../../assets/SkillIcons/htmlIcon.png';
import reactIcon from '../../assets/SkillIcons/reactIcon.png';
import cssIcon from '../../assets/SkillIcons/cssIcon.png';
import reduxIcon from '../../assets/SkillIcons/reduxIcon.png';
import javaScriptIcon from '../../assets/SkillIcons/javaScriptIcon.png';
import nodeJSIcon from '../../assets/SkillIcons/nodeJSIcon.png';
import postgreSQLIcon from '../../assets/SkillIcons/postgreSQLIcon.png';

const SkillsSection = () => {
    return (
        <div className='skills_section'>
            <h1>
                SKILLS
            </h1>
            <div className='skills_list_container'>
                <div>
                    <h3>
                        HTML,
                    </h3>
                    <img src={htmlIcon} alt='HTML'/>
                </div>
                <div>
                    <h3>
                        REACT,
                    </h3>
                    <img src={reactIcon} alt='REACT'/>
                </div>
                <div>
                    <h3>
                        CSS,
                    </h3>
                    <img src={cssIcon} alt='CSS'/>
                </div>
                <div>
                    <h3>
                        REDUX,
                    </h3>
                    <img src={reduxIcon} alt='REDUX'/>
                </div>
                <div>
                    <h3>
                        JS,
                    </h3>
                    <img src={javaScriptIcon} alt='JS'/>
                </div>
                <div>
                    <h3>
                        NODE,
                    </h3>
                    <img src={nodeJSIcon} alt='NODE'/>
                </div>
                <div>
                    <h3>
                        POSTGRESQL
                    </h3>
                    <img src={postgreSQLIcon} alt='POSTGRESQL'/>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;