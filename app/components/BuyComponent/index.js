import React, {Component} from 'react';
import './index.less'
export default class BuyComponent extends Component {
    render() {
        return (
            <div className="buy">
                <button className={this.props.favorited?'active':''} onClick={this.props.favorited?'':() => this.props.favorite()}>{this.props.favorited?'已收藏':'收藏'}</button>
                <button onClick={() => this.props.buy()}>购买</button>
            </div>
        )
    }

}