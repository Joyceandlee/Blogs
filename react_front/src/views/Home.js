import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import Login from './Login'
import Index from './Index'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/index' component={Index}></Route>
                    <Redirect from="/" to="/login" />
                </Switch>
            </div>
        )
    }
}
