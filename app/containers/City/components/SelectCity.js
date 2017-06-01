import React,{Component} from 'react';
export default class SelectCity extends Component{
    render(){
        return (
            <div className="select-city">
                <h3>选择城市</h3>
                <ul className="city-list" onClick={(event)=>this.props.updateCity(event.target.innerText)}>
                    <li>北京</li>
                    <li>上海</li>
                    <li>杭州</li>
                    <li>天津</li>
                    <li>南京</li>
                    <li>深圳</li>
                    <li>武汉</li>
                    <li>河北</li>
                    <li>长沙</li>
                </ul>
            </div>
        )
    }
}