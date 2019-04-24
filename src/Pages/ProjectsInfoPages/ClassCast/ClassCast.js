import React from 'react';
import './ClassCast.scss';
import { NavLink } from 'react-router-dom';

const ClassCast = () => {
    return (
        <div>
            <NavLink to='/'>
                <button>
                    Back
                </button>
            </NavLink>
            <p>
                Classcast dot live
            </p>
        </div>
    )
}

export default ClassCast;