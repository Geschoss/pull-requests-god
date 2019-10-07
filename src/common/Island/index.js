import React from 'react';
import styles from './Island.module.css';
import cn from '../../utils/classnames';

const Island = ({ msg, author, date, merged }) => (
    <div className={styles.root}>
        <div className={cn(styles.title, styles.text)}>{author}</div>
        <div className={styles.content}>{msg}</div>
        <div className={cn(styles.footer, styles.text)}>
            <div className={styles.text}>{date}</div>
            {merged && <div className={cn(styles.text, styles.merge)}>merged</div>}
        </div>
    </div>
);

export default Island;
