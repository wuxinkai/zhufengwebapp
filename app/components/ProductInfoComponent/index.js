import React,{Component} from 'react';
import './index.less';
import StarComponent from '../../components/StarComponent';
export default class ProductInfoComponent extends Component{
    render(){
        let {img,title,star,price,subTitle,desc} = this.props.info;
        return (
            <div  className="product-info">
                <div className="product-base">
                    <img src={img} alt={title}/>
                    <div className="product-detail">
                        <h3>{title}</h3>
                        <div className="star">
                          <StarComponent star={star}/>
                          <span className="price">￥{price}</span></div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                <div className="buy-info" dangerouslySetInnerHTML={{__html:desc}}></div>
            </div>
        )
    }
}