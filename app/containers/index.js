import React,{Component} from 'react';
import RouterMap from '../routes/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../store/actions';
import '../assets/index.less';
import userInfo from '../local/userInfo';
class App extends Component{
    constructor(){
        super();
        this.state = {
            loaded:false
        };
    }
    componentWillMount(){
       let city = userInfo.getCity();
       this.props.updateCity(city);
       this.setState({loaded:true});
    }
    render(){
        return (
            <div>
                {
                    this.state.loaded?<RouterMap/>:<div>正在加载</div>
                }
            </div>
        )
    }
}

export default connect(
  null,
  dispatch=>  bindActionCreators(actions,dispatch)
)(App);