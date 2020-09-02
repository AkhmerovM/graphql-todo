import React, { useState, useCallback } from 'react';
import { AddForm } from 'modules/todo/components/AddForm';
import { ToDoItem } from 'modules/todo/components/ToDoItem';
import styles from './style.local.less';

const initialState = [
    { id: 1, name: 'Learn typescript' },
    { id: 2, name: 'Learn mobx' },
    { id: 3, name: 'Learn graphQl' },
];

export function ToDoContainer() {
    const [todoList, setTodoList] = useState(initialState);
    const addNewItem = useCallback((name) => {
        setTodoList([...todoList, { id: new Date().getTime(), name }]);
    }, [todoList]);
    const removeItem = useCallback((id) => {
        const array = todoList.filter((item) => item.id !== id);
        setTodoList(array);
    }, [todoList]);
    return (
        <div className={styles.todoContainer}>
            <div className={styles.todoContainerWrapper}>
                <AddForm handleSubmitForm={addNewItem} />
                <div className={styles.todoList}>
                    <div className={styles.todoListInfo}>
                        <div>Todo List</div>
                        <div>
                            There are
                            {` ${todoList.length} `}
                            todos
                        </div>
                    </div>
                    {todoList.map((item) => (
                        <ToDoItem key={item.id} name={item.name} id={item.id} removeItem={removeItem} />
                    ))}
                </div>
            </div>
        </div>
    );
}
