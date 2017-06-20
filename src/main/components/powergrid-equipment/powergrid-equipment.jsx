import React from 'react';
import pic from './powergrid-equipment.png';
import style from './powergrid-equipment.less';
import ModuleTitle from '../module-title/module-title.jsx';

const PowergridEquipment = () => (
    <div className={style.container} style={{backgroundImage: `url(${pic})`}}>
        <ModuleTitle style={{
            width: '436px',
            top: '20px',
            left: 0
        }}>运维检修</ModuleTitle>
    </div>
);

export default PowergridEquipment;