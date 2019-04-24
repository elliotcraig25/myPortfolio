import React from 'react';
import './ContactSection.scss';

const ContactSection = () => {
    return (
        <div className='contact_section'>
            <h1>CONTACT INFO</h1>
            <div>
                <p>
                    801 874 8372
                </p>
                <p>
                    elliotcraig25@gmail.com
                </p>
                <p>                    
                    <a href='https://www.linkedin.com/in/elliot-craig/'>
                        LinkedIn
                    </a>
                </p>
                <p>                    
                    <a href='https://github.com/elliotcraig25'>
                        GitHub
                    </a>
                </p>
            </div>
        </div>
    )
}

export default ContactSection;