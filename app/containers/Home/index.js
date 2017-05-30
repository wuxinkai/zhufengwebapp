import React,{Component} from 'react';
import HomeHeader from './pages/Home-Header';
import Slider from './pages/Slider';
import Ad from './pages/Ad';
export default class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader city="北京"></HomeHeader>
                <Slider/>
                <Ad/>
            </div>
        )
    }
}