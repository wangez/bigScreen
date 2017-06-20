import React from 'react';
import style from './powergrid-overview.less';
import pic from './powergrid-overview.png';
import ModuleTitle from '../module-title/module-title.jsx';

const PowerGridOverview = () => (
    <div style={{backgroundImage: `url(${pic})`}} className={style.container}>
        <ModuleTitle style={{
            width: '420px',
            top: '20px'
        }}>电网概况</ModuleTitle>
    </div>
);

export default PowerGridOverview;