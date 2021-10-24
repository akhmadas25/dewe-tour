import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import DetailTrip from '../pages/DetailTrip'
import Profile from '../pages/Profile'

const Routes = () =>{
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/trip/:id" exact component={DetailTrip}/>
        </Switch>
    )
}

export default Routes
