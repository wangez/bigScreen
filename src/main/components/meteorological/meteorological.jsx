import React from 'react';
import pic from './meteorological.png';
import style from './meteorological.less';
import icon from './icon.png';
import ModuleTitle from '../module-title/module-title.jsx';

const Icon = () => (
    <span className={style.icon} style={{backgroundImage: `url(${icon})`}}/>
);

const disc = [
    ['temperature', '温度(℃)：'],
    ['wspeed', '风速(M/S)：'],
    ['humidity', '湿度：'],
    ['yjtitle', '灾害气象种类：'],
    ['issuedatew', '预计时间：']
];

const Meteorological = (props) => (
    <div className={style.container} style={{backgroundImage: `url(${pic})`}}>
        <ModuleTitle style={{
            width: '418px'
        }}>运维检修</ModuleTitle>
        <ul className={style.dataList}>
            {disc.map( 
                ([key, text]) => 
                    <li key={key}>
                        <Icon />
                        <span className={style.subtitle}>{text}</span>
                        <span className={style.subvalue}>{props.meteorological[key]}</span>
                    </li> 
                )
            }
        </ul>
    </div>
);

export default Meteorological;