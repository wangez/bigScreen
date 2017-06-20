import React from 'react';
import style from './title.less';
import dsDics from '../../../common/ds-disc.js';

const getDate = () => {
    const date = new Date();
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

const Title = (props) => (
    <div className={style.title}>
        <div>城市：{dsDics[props.ds]}</div>
        <div>时间：{getDate()}</div>
    </div>
);

export default Title;