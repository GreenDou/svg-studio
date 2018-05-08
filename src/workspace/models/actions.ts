import { createAction } from 'redux-actions';

export const enum ActionTypes {
  ADD_RECT = 'ADD_RECT',
};

export interface AddRectPayload {
  index:number;
}
export const action_add_rect = createAction(
    ActionTypes.ADD_RECT, (index:number) => ({ index }));
