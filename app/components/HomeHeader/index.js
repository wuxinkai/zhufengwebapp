import React,{Component} from 'react';
import {Link} from 'react-router-dom';
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
                    <Link to="/login"><i className="iconfont icon-gerenzhongxin"></i></Link>
                </div>
            </div>
        )
    }
}