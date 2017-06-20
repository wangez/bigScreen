import React from 'react';
import routesStyle from './routes.less';
import LazyComponent from '../common/lazy-component.jsx';
import { Route } from 'react-router-dom';
// 懒加载模块  import from 'bundle-loader?lazy!path' 得到异步加载方法
// 异步加载方法用于加载path文件，它接受一个参数，作为异步加载后的回调方法
// example:
// demonstrationApplication(
//     (mod) => console.log( mod.default ? mod.default : mod )
// )
import demonstrationApplication from 'bundle-loader?lazy!../demonstrationApplication/demonstrationApplication.jsx';
import riskEvaluation from 'bundle-loader?lazy!../riskEvaluation/riskEvaluation.jsx';
import faultPrediction from 'bundle-loader?lazy!../faultPrediction/faultPrediction.jsx';
import stateEvaluation from 'bundle-loader?lazy!../stateEvaluation/stateEvaluation.jsx';
import loadAbilityEvaluation from 'bundle-loader?lazy!../loadAbilityEvaluation/loadAbilityEvaluation.jsx';
import dataAcceptConversion from 'bundle-loader?lazy!../dataAcceptConversion/dataAcceptConversion.jsx';
import main from 'bundle-loader?lazy!../main/main.jsx';

import Main from '../main/main.jsx';
//默认显示模块   方便开发用
const defaultModule = main;

const disc = {
    demonstrationApplication,
    riskEvaluation,
    faultPrediction,
    stateEvaluation,
    loadAbilityEvaluation,
    dataAcceptConversion,
    main
};

//TODO 加载中
const Loading = () => (
    <div style={{
        position: 'absolute',
        height: '400px',
        width: '40px',
        backgroundColor: 'red'
    }} />
);

//各模块路由 通过LazyComponent懒加载模块文件
const Routes = ({list}) => {
    return <div className={routesStyle.container}>
        {
            list.map( ({id}) =>  <Route key={id} path={`/route-${id}`} component={ () => <LazyComponent load={disc[id]}>{(Mod) => Mod === null ? <Loading /> : <Mod />}</LazyComponent> } />)
        }
        {/*首页面显示为默认模块，方便开发用*/}
        {/*<Route exact={true} path={`/`} component={ () => <Main /> } />*/}
        <Route exact={true} path={`/`} component={  () => <LazyComponent load={defaultModule}>{(Mod) => Mod === null ? <Loading /> : <Mod />}</LazyComponent>  } />
    </div>;
};

export { Routes as default };