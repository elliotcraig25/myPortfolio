import React from 'react';
import './Navbar.scss';

const Navbar = (props)=>{
    return(
        <div className='navbar' style={{display: props.display}}>
            <nav>
                <p><a href="#start">Home</a></p>
                <p><a href="#projects">Projects</a></p>
                <a href="#about" target="_parent"><p>About</p></a>
                <a href="#skills" target="_parent"><p>Skills</p></a>
                <a href="#contact" target="_parent"><p>Contact</p></a>
            </nav>
        </div>
    )
}

export default Navbar;