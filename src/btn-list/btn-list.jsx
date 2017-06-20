import React, { Component } from 'react';
// import 'babel-polyfill';
import Btn from './btn/btn.jsx';
//样式
import btnlistStyle from './btn-list.less';
//按钮图标
import mainImage from './main.png';
import dataAcceptConversionImage from './data-accept-conversion.png';
import loadAbilityEvaluationImage from './load-ability-evaluation.png';
import stateEvaluationImage from './state-evaluation.png';
import faultPredictionImage from './fault-prediction.png';
import riskEvaluationImage from './risk-evaluation.png';
import demonstrationApplicationImage from './demonstration-application.png';

const list = [
    { id: 'demonstrationApplication', name: '示范应用', icon: demonstrationApplicationImage },
    { id: 'riskEvaluation', name: '风险评估', icon: riskEvaluationImage },
    { id: 'faultPrediction', name: '故障预测', icon: faultPredictionImage },
    { id: 'stateEvaluation', name: '状态评价', icon: stateEvaluationImage },
    { id: 'loadAbilityEvaluation', name: '负载能力评估', icon: loadAbilityEvaluationImage },
    { id: 'dataAcceptConversion', name: '数据获取转换', icon: dataAcceptConversionImage },
    { id: 'main', name: '首页', icon: mainImage }
];

//页面顶部按钮列表，通过active控制对应按钮高亮
class BtnList extends Component {
    constructor (props) {
        super(props);
        this.map = new Map();
    }
    render () {
        let active = this.props.active,
            index = active.indexOf('-') + 1;
        active = index === 0 ? active : active.substr(index);
        return <ul className={ btnlistStyle.btnList }>
            {list.map( (elem, i) => <Btn key={i} {...elem} hover={ elem.id === active } /> )}
        </ul>;
    }
}

export {BtnList as default, list};