import React,{Component} from 'react';
import RouterMap from '../routes/index';
import '../assets/index.less';
export default class App extends Component{
    constructor(){
        super();
        this.state = {
            loaded:false
        };
    }
    componentWillMount(){
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