import React, {Component} from 'react';
import {getAd} from '../../../../fetch/home';
import './index.less'
export default class Ad extends Component {
    constructor() {
        super();
        this.state = {ads: []};
    }

    componentWillMount() {
        getAd().then(ads => {
            this.setState({ads}, () => {
                console.log(this.state.ads);
            });

        });
    }

    render() {
        return (
            <div className="ad-area">
                <h3>超值特惠</h3>
                <div className="ads">
                    {
                        this.state.ads.map((ad, index) => (
                            <a href={ad.link} className="ad" key={index}>
                                <img src={ad.img} alt={ad.title}/>
                            </a>
                        ))
                    }
                </div>
            </div>
        )
    }
}