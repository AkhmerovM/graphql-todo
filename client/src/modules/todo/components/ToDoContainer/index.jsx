import React, { useState, useCallback } from 'react';
import { AddForm } from 'modules/todo/components/AddForm';
import { ToDoItem } from 'modules/todo/components/ToDoItem';
import styles from './style.local.less';

export function ToDoContainer() {
    const [todoList, setTodoList] = useState([]);
    const addNewItem = useCallback((name) => {
        setTodoList([...todoList, { id: new Date().getTime(), name }]);
    }, [todoList]);
    return (
        <div className={styles.todoContainer}>
            <AddForm handleSubmitForm={addNewItem} />
            <div className={styles.todoList}>
                {todoList.map((item) => (
                    <ToDoItem key={item.id} name={item.name} id={item.id} />
                ))}
            </div>
        </div>
    );
}
