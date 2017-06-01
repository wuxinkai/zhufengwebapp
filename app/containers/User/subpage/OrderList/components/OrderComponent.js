import React,{Component} from 'react';
export default class OrderComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            editStatus:false //正在评价
        }
    }
    render(){
        let {id,commentState,img,title,count,price} = this.props.order;
        return (
            <div>
                <div className="order">
                    <img src={img} alt={title}/>
                    <div className="order-info">
                        <h3>商户:{title}</h3>
                        <span>数量:{count}</span>
                        <span>价格:{price}</span>
                    </div>
                    <div className="order-btn">
                        {/*三个状态 0表示未评价 1表示 正在评价 2 评价完成*/}
                        {
                            this.state.editStatus?null:<button onClick={commentState == 0?()=>this.setState({editStatus:true}):''} className={commentState == 0?'':'active'}>评价</button>
                        }
                    </div>
                </div>
                {
                    this.state.editStatus?(
                        <div className="comment-area">
                            <textarea ref="comment" rows="5"></textarea>
                            <div>
                                <button onClick={()=>this.props.comment(id,this.refs.comment.value,()=>this.setState({editStatus:false}))}>确认</button>
                                <button onClick={()=>this.setState({editStatus:false})}>取消</button>
                            </div>
                        </div>
                    ):null
                }
            </div>

        )
    }
}