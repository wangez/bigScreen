import React from 'react';
import pic from './equipment-list.png';
import style from './equipment-list.less';

const titles = ["主变压器", "组合电器", "线路", "电缆", "电流互感器", "电压互感器", "断路器", "避雷器", "隔离开关"];

const EquipmentList = (props) => (
    <div className={style.container} style={{backgroundImage: `url(${pic})`}}>
        {
            titles.map( elem => <div key={elem} className={style.sub}>{elem}</div> )
        }
        {
            props.equipmentListData && [...props.equipmentListData.values()].map( elem => <div key={elem} className={style.sub}>{elem}</div> )
        }
    </div>
);

export default EquipmentList;