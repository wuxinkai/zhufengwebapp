import React,{Component} from 'react';
import './index.less'
export default class UserInfoComponent extends Component{
    render(){
        return (
            <div className="user-info">
                <div>用户名:{this.props.username}</div>
                <div>城市:{this.props.city}</div>
            </div>
        )
    }
}