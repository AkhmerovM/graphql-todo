import { action, observable } from 'mobx';

class TodoStore {
    @observable todoList;

    @action addNewItem = (name: string): void => {
        this.todoList.push({
            id: new Date().getTime(),
            name,
        });
    }

@action removeItem = (id: number): void => {
    this.todoList = this.todoList.filter((item) => item.id !== id);
}
}
