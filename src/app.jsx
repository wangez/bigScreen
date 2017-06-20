import React from 'react';
import indexStyle from './index.less';
import BtnList, { list } from './btn-list/btn-list.jsx';
import Routes from './btn-list/routes.jsx';
import bgImage from './index.png';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//将路由内容传递给BtnList，BtnList根据传递的参数高亮对应按钮
const ActiveBL = ({match}) => <BtnList active={match.params.moduleName || 'main'}/>;

// 按钮状态及展示内容通过路由控制
export default function App () {
    return <Router>
        <div className={indexStyle.app} style={{backgroundImage: `url(${bgImage})`}}>
            {/*menus，页面顶部按钮，根据路由高亮对应按钮*/}
            <Route exact={true} path="/" render={ActiveBL} />
            <Route path="/:moduleName" render={ActiveBL} />
            {/*内容区，根据路由展示不同模块*/}
            <Routes list={list}/>
        </div>
    </Router>;
}