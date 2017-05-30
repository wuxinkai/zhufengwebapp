import React,{Component} from 'react';
import {getList} from '../../../../fetch/home';
import Products from '../../../../components/Products';
import LoadMore from '../LoadMore';
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
    load = ()=>{
        getList(this.props.city,this.state.page).then((res)=>{
            this.setState({
                hasMore:res.hasMore,
                data:[...this.state.data,...res.data]
            });
        })
    }
    loadMore = ()=>{
        this.setState({page:this.state.page+1},this.load);
    }
    render(){
        return (
            <div className="product-area">
                <h3>超值特惠</h3>
                <Products products={this.state.data}/>
                <LoadMore loadMore={this.loadMore} hasMore={this.state.hasMore}/>
            </div>
        )
    }
}