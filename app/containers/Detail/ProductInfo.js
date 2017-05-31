import React,{Component} from 'react';
import {getInfo} from '../../fetch/detail';
import ProductInfoComponent from '../../components/ProductInfoComponent';
export default class ProductInfo extends Component{
    constructor(){
        super();
        this.state = {info:{}};
    }
    componentDidMount(){
        getInfo(this.props.id).then((info)=>{
            this.setState({info});
        })
    }
    render(){
       return <ProductInfoComponent info={this.state.info}/>
    }
}