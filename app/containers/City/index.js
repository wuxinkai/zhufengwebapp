import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PageHeader from '../../components/PageHeader';
import CurrentCity from './components/CurrentCity';
import SelectCity from './components/SelectCity';
import actions from '../../store/actions';
import './index.less'
class City extends Component{
    updateCity = (city)=>{
        this.props.updateCity(city);
        this.props.history.path('/');
    }
    render(){
        return (
            <div>
                <PageHeader title="选择城市" history={this.props.history}/>
                <CurrentCity city={this.props.userInfo.city}/>
                <SelectCity updateCity={this.updateCity}/>
            </div>
        )
    }
}

export default connect(
    state=>({userInfo:state.userInfo}),
    dispatch=>bindActionCreators(actions,dispatch)
)(City);