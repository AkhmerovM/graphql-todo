import { createStore, applyMiddleware, combineReducers } from 'redux';
import { todoReducer, TTodoState } from 'modules/todo/reducers';
import { todoModuleName } from 'modules/todo/constants';

type TRootState = {
    [todoModuleName]: TTodoState,
};
const rootReducer = combineReducers({
    [todoModuleName]: todoReducer,
});

const store = createStore(rootReducer);

export { store };
export type { TRootState };
