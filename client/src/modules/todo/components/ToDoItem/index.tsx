import React, { useCallback } from 'react';
import { Button } from 'antd';
import styles from './style.local.less';

type TProps = {
    name: string,
    id: number,
    removeItem: (id: number) => void,
}

export function ToDoItem({ name, id, removeItem }: TProps): JSX.Element {
    const handleRemoveItem = useCallback(() => {
        removeItem(id);
    }, [id, removeItem]);
    return (
        <div className={styles.todoItem}>
            <span>{name}</span>
            <Button onClick={handleRemoveItem} danger>Complete</Button>
        </div>
    );
}
