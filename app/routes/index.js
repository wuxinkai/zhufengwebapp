import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import Login from '../containers/Login';
import User from '../containers/User';
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/detail/:id" component={Detail}/>
                            <Route path="/login/:from?" component={Login}/>
                            <Route path="/user" component={User}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}