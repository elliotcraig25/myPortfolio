import React from 'react';
import './MiniProjectsList.scss';

import { NavLink } from 'react-router-dom';

const MiniProjectsList = () => {
    return (
        <div>
            <NavLink to='/'>
                <button>
                    back
                </button>
            </NavLink>
            <h1>
                Mini Projects list
            </h1>
            <NavLink>
                <div>Sample Project</div>
            </NavLink>
        </div>
    )
}

export default MiniProjectsList;