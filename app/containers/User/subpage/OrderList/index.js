import React,{Component} from 'react';
import {getOrderList,confirmComment} from '../../../../fetch/orderList';
import OrderListComponent  from './components/OrderListComponent'
import './index.less'
export default class OrderList extends Component{
    constructor(){
        super();
        this.state = {
            orders:[]
        };
    }
    render(){
        return (
            <OrderListComponent comment={this.comment} orders={this.state.orders}/>
        )
    }
    componentDidMount(){
        getOrderList(this.props.username).then(data=>{
            this.setState({orders:data})
        })
    }
    comment = (id,comment,callback)=>{
        confirmComment({id,comment}).then(newOrder=>{
            let orders = this.state.orders.map((order)=>(order.id == id?newOrder:order));
            this.setState({orders},callback);
        })
    }
}