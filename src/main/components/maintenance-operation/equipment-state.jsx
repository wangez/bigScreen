import React from 'react';
import pic from './equipment-state.png';
import style from './equipment-state.less';

const states = [
    ['正常', {color: '#00d04b'}],
    ['注意', {color: '#f4eb00'}],
    ['异常', {color: '#dc8010'}],
    ['严重', {color: '#e7030b'}]
];

const EquipmentState = (props) => (
    <div className={style.container} style={{backgroundImage: `url(${pic})`}}>
        <div className={style.equipmentState}>
            <span style={{color: '#fff'}}>设备健康状态：</span>
            {states.map( ([elem, color]) => <span style={color} key={elem}>{' ' + elem + props.equipmentState.get(elem)}</span> )}
        </div>
    </div>
);

export default EquipmentState;