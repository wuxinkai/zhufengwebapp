import React,{Component} from 'react';
import './index.less';
export default class LoadMore extends Component{
    onScroll= () => {
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            let screenHeight = window.screen.height;
            if(this.refs && this.refs.loadMore){
                let top = this.refs.loadMore.getBoundingClientRect().top;
                if (top <= screenHeight) {
                    this.props.loadMore();
                    clearTimeout(this.timer);
                }
            }
        }, 500);
    };
    componentDidMount(){
        this.timer;
        window.addEventListener('scroll',this.onScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.onScroll);
    }
    render(){
        return (
            <div ref="loadMore"  className="load-more" onClick={this.props.loadMore}>
                {
                    this.props.loading?<div>正在加载</div>:(this.props.hasMore?<div>点击加载更多</div>:<div>木有了</div>)
                }
            </div>
        )
    }
}