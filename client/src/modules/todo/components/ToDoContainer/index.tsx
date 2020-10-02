import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddForm } from 'modules/todo/components/AddForm';
import { ToDoItem } from 'modules/todo/components/ToDoItem';
import { BaseApi } from 'modules/common/services/baseApi';
import { selectTodoModule } from 'modules/todo/selectors';
import { actionAddItem } from 'modules/todo/actions';
import styles from './style.local.less';

function ToDoContainer(): JSX.Element {
    const todoList = useSelector(selectTodoModule);
    const dispatch = useDispatch();
    const addNewItem = (name: string): void => {
        dispatch(actionAddItem(name));
    };

    const removeItem = (id: number): void => {
        // this.todoList = /**/this.todoList.filter((item) => item.id !== id);
    };

    // const request = new BaseApi('https://randomuser.mea/');
    // setTimeout(async () => {
    //     const a = await request.get('api/', { mode: 'cors' });
    //     console.log(a);
    // });
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
export { ToDoContainer };
