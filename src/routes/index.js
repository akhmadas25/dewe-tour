import React from 'react'
import {Route, useHistory, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import DetailTrip from '../pages/DetailTrip'
import Profile from '../pages/Profile'
import Index from '../admin/Index'
import ListTransaction from '../admin/ListTransaction'
import AddTrip from '../admin/AddTrip'
import Chart from '../pages/Chart'

const Routes = () =>{
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/chart" exact component={Chart} />
            <Route path="/trip/:id" exact component={DetailTrip}/>
            <Route path="/admin" exact component={Index} />
            <Route path="/admin/list-transaction" exact component={ListTransaction} />
            <Route path="/admin/add-trip" exact component={AddTrip} />
        </Switch>
    )
}

export default Routes
