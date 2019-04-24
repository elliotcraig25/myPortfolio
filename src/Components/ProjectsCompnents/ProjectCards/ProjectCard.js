import React from 'react';
import './ProjectCard.scss';
import { NavLink } from "react-router-dom";
// import ClassCastImg from "../../../assets/classCast.png";

const ProjectCard = (props) => {
    return (
        <div className='card_container'>
            <div className='card_title'>
                {
                    // if it's an external site with an https address the a tag will open that site in a new tab, otherwise the NavLink Keeps it on the portfolio website

                    props.liveUrl.split('//')[0] === 'https:' ? (
                        <a href={props.liveUrl} target='_blank' rel="noopener noreferrer">
                            <h1>{props.project}</h1>
                        </a>
                    ) : (
                            <NavLink to={props.liveUrl}>
                                <h1>{props.project}</h1>
                            </NavLink>
                        )
                }
            </div>
            <div className='card_image'>
                <img src={props.image} alt='screen shot'></img>
            </div>
            <div className='card_description'>
                <p>{props.description}</p>
                <div>
                    <NavLink to={props.learnMoreUrl}>
                        <button>Learn More</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;