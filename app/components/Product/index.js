import React,{Component} from 'react';
export default class Product extends Component{
    render(){
        let {img,title,subTitle,price,distance,number,id} = this.props.product;
        return (
            <div className="product">
                <img src={img} alt={title}/>
                <div className="product-desc">
                    {title}
                    {subTitle}
                    {price}
                    {distance}
                    {number}
                </div>
            </div>
        )
    }
}