import React,{Component} from 'react';
import ReactSwipe from  'react-swipe';
import {Link} from 'react-router-dom';
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
                           <Link to="/search/food"><li><i className="iconfont icon-jewelry"></i><span>美食</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-jewelry"></i><span>电影</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-jewelry"></i><span>酒店</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-jewelry"></i><span>休闲</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-jewelry"></i><span>外卖</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-jewelry"></i><span>火锅</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-jewelry"></i><span>丽人</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-jewelry"></i><span>周边</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-jewelry"></i><span>KTV</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-jewelry"></i><span>摄影</span></li></Link>
                       </ul>
                   </div>
                   <div>
                       <ul>
                           <Link to="/search/food"><li><i className="iconfont icon-gifts"></i><span>美食</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-gifts"></i><span>电影</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-gifts"></i><span>酒店</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-gifts"></i><span>休闲</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-gifts"></i><span>外卖</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-gifts"></i><span>火锅</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-gifts"></i><span>丽人</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-gifts"></i><span>周边</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-gifts"></i><span>KTV</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-gifts"></i><span>摄影</span></li></Link>
                       </ul>
                   </div>
                   <div>
                       <ul>
                           <Link to="/search/food"><li><i className="iconfont icon-bags"></i><span>美食</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-bags"></i><span>电影</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-bags"></i><span>酒店</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-bags"></i><span>休闲</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-bags"></i><span>外卖</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-bags"></i><span>火锅</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-bags"></i><span>丽人</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-bags"></i><span>周边</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-bags"></i><span>KTV</span></li></Link>
                           <Link to="/search/food"><li><i className="iconfont icon-bags"></i><span>摄影</span></li></Link>
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