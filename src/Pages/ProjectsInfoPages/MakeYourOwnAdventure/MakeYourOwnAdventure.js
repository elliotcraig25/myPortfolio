import React from 'react';
import './MakeYourOwnAdventure.scss';

import { NavLink } from 'react-router-dom';

const MakeYourOwnAdventure = () => {
    return (
        <div>
            <NavLink to='/'>
                <button>
                    Back
                </button>
            </NavLink>
            <p>
                Make Your Own Choose Your Own Adventure dot com
            </p>
        </div>
    )
}

export default MakeYourOwnAdventure;