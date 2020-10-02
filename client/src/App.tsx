import React from 'react';
import { Provider } from 'react-redux';
import { ToDoContainer } from './modules/todo/components/ToDoContainer';
import { store } from './store/todoStore';

export function App(): JSX.Element {
    return <Provider store={store}><ToDoContainer /></Provider>;
}
