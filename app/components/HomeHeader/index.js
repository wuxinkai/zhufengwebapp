import React,{Component} from 'react';
import './index.less';
export default class Home extends Component{
    render(){
        return (
            <div className="home-header back">
               <div className="city">
                   {this.props.city}
                   <i className="iconfont icon-moreunfold"></i>
               </div>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <input type="text"/>
                </div>
                <div className="profile">
                    <i className="iconfont icon-gerenzhongxin"></i>
                </div>
            </div>
        )
    }
}