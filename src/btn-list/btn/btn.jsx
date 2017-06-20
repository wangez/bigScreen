import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import btnStyle from './btn.less';

import btnRing from './btn-ring.png';
import btnActive from './btn-active.png';

//按钮 点击通过路由link实现
//Link实际是添加<a>标签，样式中.btnList li a 设置样式，使其填满父级<li>标签
export default class Btn extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return <li className={ btnStyle.container + (this.props.hover ? ( ' ' + btnStyle.hover ) : '') }>
            <Link to={`/route-${this.props.id}`}></Link>
            <img src={btnRing} className={btnStyle.btnRing} />
            <img src={btnActive} className={btnStyle.btnActive} />
            <span className={btnStyle.icon} style={{backgroundImage: `url(${this.props.icon})`}} />
            <span>{this.props.name}</span>
        </li>;
    }
}