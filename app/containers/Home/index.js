import React,{Component} from 'react';
import HomeHeader from './pages/Home-Header';
import Slider from './pages/Slider';
import Ad from './pages/Ad';
import {connect} from 'react-redux';
class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader city={this.props.userInfo.city}></HomeHeader>
                <Slider/>
                <Ad/>
            </div>
        )
    }
}
export default connect(state=>({userInfo:state.userInfo}))(Home);