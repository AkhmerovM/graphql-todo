import { todoActionTypes } from 'modules/todo/constants';

type TTodoItem = {
    id: number,
    name: string,
}
type TTodoState = TTodoItem[];

const initialState: TTodoState = [
    { id: 1, name: 'Learn typescript' },
    { id: 2, name: 'Learn mobx' },
    { id: 3, name: 'Learn graphQl' },
];

type TActionAddItem = {type: typeof todoActionTypes.ADD_ITEM, payload: string}

type TActionType = TActionAddItem;

function todoReducer(state: TTodoState = initialState, action: TActionType): TTodoState {
    switch (action.type) {
    case (todoActionTypes.ADD_ITEM):
        return [
            ...state,
            { id: new Date().getTime(), name: action.payload },
        ];
    default:
        return state;
    }
}
export { todoReducer };
export type { TTodoState, TActionAddItem };
