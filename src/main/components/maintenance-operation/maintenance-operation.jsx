import React from 'react';
import pic from './maintenance-operation.png';
import style from './maintenance-operation.less';
import EquipmentList from './equipment-list.jsx';
import EquipmentState from './equipment-state.jsx';
import Title from './title.jsx';
import ModuleTitle from '../module-title/module-title.jsx';

const MaintenanceOperation = ({ds, equipmentState, equipmentListData}) => (
    <div className={style.container} style={{backgroundImage: `url(${pic})`}}>
        <Title ds={ds} />
        <EquipmentState equipmentState={equipmentState} />
        <ModuleTitle style={{
            width: '436px',
            top: 0,
            left: 0
        }}>运维检修</ModuleTitle>
        <EquipmentList equipmentListData={equipmentListData}/>
    </div>
);

export default MaintenanceOperation;