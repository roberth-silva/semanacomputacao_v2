import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Teacher from './pages/Teacher';


export default function Routes(){
    return (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Teacher} />
          </Switch> 
        </BrowserRouter>
    );
}