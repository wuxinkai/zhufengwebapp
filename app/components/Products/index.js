import React,{Component} from 'react';
import Product from '../Product';
export default class Products extends Component{
    render(){
        return (
            <div className="products">
                {
                    this.props.products.map((item,index)=>(
                        <Product product={item} key={index}/>
                    ))
                }
            </div>
        )
    }
}