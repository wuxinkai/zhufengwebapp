import React,{Component} from 'react';
import PageHeader from '../../components/PageHeader';
import ProductInfo from "./ProductInfo";
import Comment from "./Comment";
export default class Detail extends Component{
    render(){
        return (
            <div>
                <PageHeader title="商户详情" history={this.props.history}/>
                <ProductInfo id={this.props.match.params.id}/>
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
}