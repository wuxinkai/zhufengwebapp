import React,{Component} from 'react';
import {getComment} from '../../fetch/detail';
import LoadMore from '../Home/pages/LoadMore';
import CommentsComponent from '../../components/CommentsComponent';
export default class Comment extends Component{
    constructor(){
        super();
        this.state = {
            loading:false,
            hasMore:false,
            page:1,
            data:[]
        }
    }
    componentDidMount(){
        this.load();
    }
    load = ()=>{
        getComment(this.props.id,this.state.page).then((res)=>{
            console.log(res);
            this.setState({
                hasMore:res.hasMore,
                data:[...this.state.data,...res.data]
            })
        })
    }
    loadMore = ()=>{
        if(!this.state.loading)
            this.setState({page:this.state.page+1},this.load);
    }

    render(){
        return (
            <div>
                {
                    this.state.data.length>0?<CommentsComponent data={this.state.data}></CommentsComponent>:<div>正在加载</div>
                }
                <LoadMore hasMore={this.hasMore} loadMore={this.loadMore} />
            </div>
        )
    }
}