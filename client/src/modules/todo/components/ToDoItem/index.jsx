import React, { useCallback } from 'react';
import { Button } from 'antd';
import styles from './style.local.less';

export function ToDoItem({ name, id, removeItem }) {
    const handleRemoveItem = useCallback(() => {
        removeItem(id);
    }, [id, removeItem]);
    return (
        <div className={styles.todoItem}>
            <span>{name}</span>
            <Button onClick={handleRemoveItem} type="danger">Complete</Button>
        </div>
    );
}
