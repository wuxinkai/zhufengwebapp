import React, {Component} from 'react';
import OrderComponent  from './OrderComponent';
export default class OrderListComponent extends Component {
    render() {
        return (
            <div className="order-list">
                <h3>订单列表</h3>
                {
                    this.props.orders.map((item, index) => (
                        <OrderComponent comment={this.props.comment} key={index} order={item}/>
                    ))
                }
            </div>
        )
    }
}