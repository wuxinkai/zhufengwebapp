import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader';
import Slider from './pages/Slider';
import Ad from './pages/Ad';
import {connect} from 'react-redux';
import List from './pages/List';
class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader city={this.props.userInfo.city} history={this.props.history}></HomeHeader>
                <Slider/>
                <Ad/>
                <List city={this.props.userInfo.city}/>
            </div>
        )
    }
}
export default connect(state=>({userInfo:state.userInfo}))(Home);