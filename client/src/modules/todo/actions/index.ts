import { TActionAddItem } from 'modules/todo/reducers';
import { todoActionTypes } from 'modules/todo/constants';

function actionAddItem(data: string): TActionAddItem {
    console.log(data);
    return {
        type: todoActionTypes.ADD_ITEM,
        payload: data,
    };
}
export { actionAddItem };
