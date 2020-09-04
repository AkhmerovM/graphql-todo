import React, { Component } from 'react';
import { AddForm } from 'modules/todo/components/AddForm';
import { ToDoItem } from 'modules/todo/components/ToDoItem';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import styles from './style.local.less';

const initialState = [
    { id: 1, name: 'Learn typescript' },
    { id: 2, name: 'Learn mobx' },
    { id: 3, name: 'Learn graphQl' },
];

@observer class ToDoContainer extends Component {
    @observable todoList = initialState;

    addNewItem = (name: string): void => {
        this.todoList.push({
            id: new Date().getTime(),
            name,
        });
    }

    removeItem = (id: number): void => {
        this.todoList = this.todoList.filter((item) => item.id !== id);
    }

    render():JSX.Element {
        return (
            <div className={styles.todoContainer}>
                <div className={styles.todoContainerWrapper}>
                    <AddForm handleSubmitForm={this.addNewItem} />
                    <div className={styles.todoList}>
                        <div className={styles.todoListInfo}>
                            <div>Todo List</div>
                            <div>
                                There are
                                {` ${this.todoList.length} `}
                                todos
                            </div>
                        </div>
                        {this.todoList.map((item) => (
                            <ToDoItem key={item.id} name={item.name} id={item.id} removeItem={this.removeItem} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export { ToDoContainer };
