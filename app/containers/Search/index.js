import React,{Component} from 'react';
import SearchHeader from '../../components/SearchHeader';
import './index.less';
export default class Search extends Component{
    render(){
        return (
            <div>
                <SearchHeader value={this.props.match.params.keyword||''} search={this.search} history={this.props.history}/>
            </div>
        )
    }
    search(keyword){
        this.props.history.push(`/search/all/${keyword}`);
    }
}