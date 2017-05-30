import React,{Component} from 'react';
import './index.less';
export default class LoadMore extends Component{
    render(){
        return (
            <div className="load-more" onClick={this.props.loadMore}>
                {
                    this.props.hasMore?<div>点击加载更多</div>:<div>木有了</div>
                }
            </div>
        )
    }
}