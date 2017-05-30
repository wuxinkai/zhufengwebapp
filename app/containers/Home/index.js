import React,{Component} from 'react';
import HomeHeader from './Home-Header';
export default class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader city="北京"></HomeHeader>
            </div>
        )
    }
}