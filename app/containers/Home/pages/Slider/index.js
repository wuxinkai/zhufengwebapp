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
                           <li><i className="iconfont icon-gifts"></i><span>美食0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>电影0</span></li>
                           <li><i className="iconfont icon-bags"></i><span>酒店0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>休闲0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>外卖0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>火锅0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>丽人0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>周边0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>KTV0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>摄影0</span></li>
                       </ul>
                   </div>
                   <div>
                       <ul>
                           <li><i className="iconfont icon-gifts"></i><span>美食0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>电影0</span></li>
                           <li><i className="iconfont icon-bags"></i><span>酒店0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>休闲0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>外卖0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>火锅0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>丽人0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>周边0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>KTV0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>摄影0</span></li>
                       </ul>
                   </div>
                   <div>
                       <ul>
                           <li><i className="iconfont icon-gifts"></i><span>美食0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>电影0</span></li>
                           <li><i className="iconfont icon-bags"></i><span>酒店0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>休闲0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>外卖0</span></li>
                           <li><i className="iconfont icon-jewelry"></i><span>火锅0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>丽人0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>周边0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>KTV0</span></li>
                           <li><i className="iconfont icon-shoes"></i><span>摄影0</span></li>
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