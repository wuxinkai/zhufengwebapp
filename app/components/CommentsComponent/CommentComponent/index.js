import React,{Component} from 'react';
import StarComponent from '../../StarComponent';
export default class CommentComponent extends Component{
    render(){
        return (
            <div className="comment">
                <div className="user-info">
                    <i className="iconfont icon-account"></i>
                    <span>{this.props.comment.username}</span>
                </div>
                <StarComponent star={this.props.comment.star}/>
                <p>{this.props.comment.comment}</p>
            </div>
        )
    }
}