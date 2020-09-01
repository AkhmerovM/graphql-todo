import React from 'react';
import styles from './style.local.less';

export function ToDoItem({ name, id }) {
    return (
        <div className={styles.todoItem}>
            <span>{id}</span>
            <span>{name}</span>
        </div>
    );
}
