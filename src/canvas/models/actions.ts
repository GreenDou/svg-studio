import { createAction } from 'redux-actions';

export const enum ActionTypes {
  ADD_RECT = 'add_rect',
  SELECT_CANVAS = 'select_canvas',
};

export interface AddRectPayload {
}
export const action_add_rect = createAction(
    ActionTypes.ADD_RECT, () : AddRectPayload => ({}));

export interface SelectCanvasPayload {
  index:number;
}
export const action_select_canvas = createAction(
    ActionTypes.SELECT_CANVAS,
    (index:number) : SelectCanvasPayload => ({ index }));
    