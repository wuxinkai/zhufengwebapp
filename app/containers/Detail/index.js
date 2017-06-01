import React, {Component} from 'react';
import PageHeader from '../../components/PageHeader';
import BuyComponent from '../../components/BuyComponent';
import ProductInfo from "./ProductInfo";
import Comment from "./Comment";
import actions from '../../store/actions/favorite';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Detail extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <PageHeader title="商户详情" history={this.props.history}/>
                <ProductInfo id={this.props.match.params.id}/>
                <BuyComponent favorited={this.props.favorite.findIndex(item => item == this.props.match.params.id) != -1}
                              buy={this.buy} favorite={this.favorite}/>
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }

    componentDidMount() {
        //先从redux中获取所有的收藏列表

    }

    checkLogin = () => {
        if (this.props.userInfo.username) {
            return true;
        }
        return false;
    }
    //购买 如果登录成功点击购买，跳到用户页
    buy = (id) => {
        let login = this.checkLogin();
        if (login) {//如果已经登录则跳到用户主页
            this.props.history.push('/user');
        } else {//如果未登录则跳到登录页
            this.props.history.push(`/login/${encodeURIComponent(this.props.match.url)}`);
        }
    }
    //收藏 验证是否登录，如果没登录让他登录，如果登录成功则跳回详情页
    favorite = (id) => {
        let login = this.checkLogin();
        if (login) {
            this.props.addFavorite(this.props.match.params.id);
        } else {//如果未登录则跳到登录页
            this.props.history.push(`/login/${encodeURIComponent(this.props.match.url)}`);
        }

    }
}

export default connect(
    state => ({userInfo: state.userInfo, favorite: state.favorite}),
    dispatch => bindActionCreators(actions, dispatch)
)(Detail);