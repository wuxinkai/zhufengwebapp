import React,{Component} from 'react';
import SearchComponent from '../../components/SearchComponent';
export default class SearchHeader extends Component{
    render(){
        return (
            <div className="back search-header">
                <i className="iconfont  icon-back" onClick={()=>this.props.history.go(-1)}></i>
                <div>
                    <SearchComponent value={this.props.value} history={this.props.history} search={this.props.search}/>
                </div>
            </div>
        )
    }
}