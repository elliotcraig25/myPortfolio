import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Pages/Landinig/Landing';
import ClassCast from '../Pages/ProjectsInfoPages/ClassCast/ClassCast';
import MakeYourOwnAdventure from '../Pages/ProjectsInfoPages/MakeYourOwnAdventure/MakeYourOwnAdventure';
import MiniProjectsList from '../Pages/ProjectsInfoPages/MiniProjects/MiniProjectsList';

export default (
    <Switch>
        <Route path='/projects/classcast/' component={ClassCast}/>
        <Route path='/projects/makeyourownadventure/' component={MakeYourOwnAdventure}/>
        <Route path='/projects/miniprojects/' component={MiniProjectsList}/>
        <Route exact path='/' component={Landing}/>
    </Switch>
)