import React, {Component} from 'react';
export default class Star extends Component {
    render() {
        return (
            <span>
                {[1,2,3,4,5].map((item,index) => (
                    <i className="iconfont icon-favoritesfilling" key={index}  style={item<=this.props.star?{color: "#E9203D"}:{}}></i>
                ))}
            </span>
        )
    }
}