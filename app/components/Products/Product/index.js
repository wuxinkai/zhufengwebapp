import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Product extends Component{
    render(){
        let {img,title,subTitle,price,distance,number,id} = this.props.product;
        return (
            <Link to={"/detail/"+id}>
                <div className="product">
                    <img src={img} alt={title}/>
                    <div className="product-desc">
                        <h3 className="title">{title}</h3>
                        <p className="subTitle">{subTitle}</p>
                        <div className="product-price">
                            <strong>￥{price}</strong>
                            <span>已售{number}</span>
                        </div>
                        <span className="distance">{distance}</span>
                    </div>
                </div>
            </Link>
        )
    }
}