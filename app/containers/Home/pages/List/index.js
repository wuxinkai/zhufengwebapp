import React,{Component} from 'react';
import {getList} from '../../../../fetch/home';
import Products from '../../../../components/Products';
import './index.less'
export default class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            page:1,
            hasMore:false,
            data:[]
        };
    }
    componentWillMount(){
        this.load();
    }
    load(){
        getList(this.props.city,this.state.page).then((res)=>{
            this.setState(res);
        })
    }
    render(){
        return (
            <div className="product-area">
                <h3>超值特惠</h3>
                <Products products={this.state.data}/>
            </div>
        )
    }
}