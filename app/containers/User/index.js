import React,{Component} from 'react';
import {connect} from 'react-redux';
import PageHeader from '../../components/PageHeader';
import UserInfoComponent from '../../components/UserInfoComponent';
import OrderList from './subpage/OrderList';
class User extends Component{
    render(){
        return (
            <div>
                <PageHeader history={this.props.history} to={encodeURIComponent('/')}>用户信息</PageHeader>
                <UserInfoComponent {...this.props.userInfo}/>
                <OrderList username={this.props.userInfo.username}></OrderList>
            </div>
        )
    }
}

export default connect(
    state => ({userInfo:state.userInfo})
)(User);