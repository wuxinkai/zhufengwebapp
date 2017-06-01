import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PageHeader from '../../components/PageHeader';
import actions from '../../store/actions';
import LoginComponent from '../../components/LoginComponent';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {showLogin: false};
    }

    componentDidMount() {
        this.checkLogin();
    }

    checkLogin = () => { //store.userInfo.username 是否有username属性
        if (this.props.userInfo.username) {
            return this.props.history.push('/user');
        }
        this.setState({showLogin: true});
    }

    login =(username)=>{
        this.props.loginUser(username);
        if(this.props.match.params.from){
            return this.props.history.push(decodeURIComponent(this.props.match.params.from));
        }else{
            this.props.history.push('/user');
        }
    }

    render() {
        return (
            <div>
                <PageHeader title="登录" history={this.props.history}></PageHeader>
                {this.state.showLogin?<LoginComponent login={this.login}/>:null}
            </div>
        )
    }
}
export default connect(
    state => ({userInfo:state.userInfo}),
    dispatch => bindActionCreators(actions, dispatch)
)(Login);