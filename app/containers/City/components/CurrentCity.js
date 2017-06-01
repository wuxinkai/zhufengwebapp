import React,{Component} from 'react';
export default class CurrentCity extends Component{
    render(){
        return (
            <div className="current-city">
                {this.props.city}
            </div>
        )
    }
}