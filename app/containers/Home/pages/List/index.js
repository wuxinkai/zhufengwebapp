import React, {Component} from 'react';
import {getList} from '../../../../fetch/home';
import Products from '../../../../components/Products';
import LoadMore from '../../../common/LoadMore';
import './index.less'
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            page: 1,
            hasMore: false,
            data: []
        };
    }

    componentDidMount() {
        this.load();
    }

    load = () => {
        getList(this.props.city, this.state.page).then((res) => {
            this.setState({
                hasMore: res.hasMore,
                data: [...this.state.data, ...res.data],
                loading:false
            });
        })
    }
    loadMore = () => {
        if(!this.state.loading){
            this.setState({page: this.state.page + 1,loading:true}, this.load);
        }
    }

    render() {
        return (
            <div className="product-area">
                <h3>超值特惠</h3>
                <Products products={this.state.data}/>
                <LoadMore loading={this.state.loading} loadMore={this.loadMore} hasMore={this.state.hasMore}/>
            </div>
        )
    }
}