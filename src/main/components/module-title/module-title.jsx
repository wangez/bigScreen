import React from 'react';
import styles from './module-title.less';

const ModuleTitle = ({ style, children }) => (
    <div style={style} className={styles.title} >{children}</div>
);

export default ModuleTitle;