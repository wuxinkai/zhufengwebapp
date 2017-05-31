import React,{Component} from 'react';
import ReactSwipe from  'react-swipe';
import './index.less'
export default class Slider extends Component{
    constructor(){
        super();
        this.state = {index:0};
    }
    render(){
        let options = {
            continuous:true,
            callback:(index)=>{
               this.setState({index});
            }
        }
        return (
           <div>
               <ReactSwipe className="carousel" swipeOptions={options}>
                   <div>
                       <ul>
                           <li><i className="iconfont icon-jewelry"></i><span>美食</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>电影</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>酒店</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>休闲</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>外卖</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>火锅</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>丽人</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>周边</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>KTV</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>摄影</span></li>
                       </ul>
                   </div>
                   <div>
                       <ul>
                           <li><i className="iconfont icon-gifts"></i><span>美食</span></li>
                           <li><i className="iconfont icon-gifts"></i><span>电影</span></li>
                           <li><i className="iconfont icon-gifts"></i><span>酒店</span></li>
                           <li><i className="iconfont icon-gifts"></i><span>休闲</span></li>
                           <li><i className="iconfont icon-gifts"></i><span>外卖</span></li>
                           <li><i className="iconfont icon-gifts"></i><span>火锅</span></li>
                           <li><i className="iconfont icon-gifts"></i><span>丽人</span></li>
                           <li><i className="iconfont icon-gifts"></i><span>周边</span></li>
                           <li><i className="iconfont icon-gifts"></i><span>KTV</span></li>
                           <li><i className="iconfont icon-gifts"></i><span>摄影</span></li>
                       </ul>
                   </div>
                   <div>
                       <ul>
                           <li><i className="iconfont icon-bags"></i><span>美食</span></li>
                           <li><i className="iconfont icon-bags"></i><span>电影</span></li>
                           <li><i className="iconfont icon-bags"></i><span>酒店</span></li>
                           <li><i className="iconfont icon-bags"></i><span>休闲</span></li>
                           <li><i className="iconfont icon-bags"></i><span>外卖</span></li>
                           <li><i className="iconfont icon-bags"></i><span>火锅</span></li>
                           <li><i className="iconfont icon-bags"></i><span>丽人</span></li>
                           <li><i className="iconfont icon-bags"></i><span>周边</span></li>
                           <li><i className="iconfont icon-bags"></i><span>KTV</span></li>
                           <li><i className="iconfont icon-bags"></i><span>摄影</span></li>
                       </ul>
                   </div>
               </ReactSwipe>
               <ul className="dots">
                   <li className={this.state.index==0?'active':''}></li>
                   <li className={this.state.index==1?'active':''}></li>
                   <li className={this.state.index==2?'active':''}></li>
               </ul>
           </div>
        )
    }
}