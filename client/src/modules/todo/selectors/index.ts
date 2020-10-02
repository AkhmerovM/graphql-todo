import { TRootState } from 'store/todoStore';
import { todoModuleName } from 'modules/todo/constants';
import { TTodoState } from 'modules/todo/reducers';

function selectTodoModule(state: TRootState): TTodoState {
    console.log(todoModuleName);
    console.log(state);
    console.log(state[todoModuleName]);
    return state[todoModuleName];
}
export { selectTodoModule };
