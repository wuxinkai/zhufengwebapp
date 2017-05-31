import React,{Component} from 'react';
import './index.less';
export default class LoadMore extends Component{
    componentDidMount(){
        let timer;
        window.onscroll = () => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                let screenHeight = window.screen.height;
                let top = this.refs.loadMore.getBoundingClientRect().top;
                if (top <= screenHeight) {
                    this.props.loadMore();
                    clearTimeout(timer);
                }
            }, 500);
        }
    }
    render(){
        return (
            <div ref="loadMore"  className="load-more" onClick={this.props.loadMore}>
                {
                    this.props.hasMore?<div>点击加载更多</div>:<div>木有了</div>
                }
            </div>
        )
    }
}