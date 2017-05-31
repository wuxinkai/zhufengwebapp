import React,{Component} from 'react';
import CommentComponent from './CommentComponent';
import './index.less'
export default class CommentsComponent extends Component{
    render(){
        return (
            <div className="comments">
                <h3>用户点评</h3>
                <hr/>
                {
                    this.props.data.map((comment,index)=>(
                        <CommentComponent comment={comment} key={index}/>
                    ))
                }
            </div>
        )
    }
}