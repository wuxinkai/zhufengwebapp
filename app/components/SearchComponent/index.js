import React,{Component} from 'react';
export default class SearchComponent extends Component{
    render(){
        return (
            <input defaultValue={this.props.value} type="text" onKeyDown={(event)=>event.keyCode==13?this.props.search(event.target.value):''}/>
        )
    }
}