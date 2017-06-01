import React,{Component} from 'react';
import './index.less';
export default class PageHeader extends Component{
    render(){
        return (
            <div className="page-header">
                <i className="iconfont icon-back" onClick={()=>this.props.to?this.props.history.push(decodeURIComponent(this.props.to)):this.props.history.goBack()}></i>
                <span>{this.props.title}</span>
            </div>
        )
    }
}