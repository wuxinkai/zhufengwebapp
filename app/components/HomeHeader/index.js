import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import SearchComponent from '../../components/SearchComponent';
import './index.less';
export default class Home extends Component{
    render(){
        return (
            <div className="home-header back">
               <div className="city">
                  <span onClick={()=>this.props.history.push('/city')}>{this.props.city}</span>
                   <i className="iconfont icon-moreunfold"></i>
               </div>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <SearchComponent value="" search={this.search}/>
                </div>
                <div className="profile">
                    <Link to="/login"><i className="iconfont icon-gerenzhongxin"></i></Link>
                </div>
            </div>
        )
    }
    search = (keyword)=>{
        this.props.history.push(`/search/all/${keyword}`);
    }
}