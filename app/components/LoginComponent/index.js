import React,{Component} from 'react';
import './index.less';
export default class LoginComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="login-panel">
                <input ref={ref=>this.username=ref} type="text" placeholder="请输入用户名"/>
                <button onClick={()=>this.props.login(this.username.value)}>登录</button>
            </div>
        )
    }
}