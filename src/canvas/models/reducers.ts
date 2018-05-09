/**
 * Reducers of Canvas
 */
import { Action, handleActions } from 'redux-actions';

import { ActionTypes, SelectCanvasPayload } from './actions';

const initial_state = {
  selected_canvas_index: 0,
};

export type CanvasState = Readonly<typeof initial_state>;

export const canvas_reducer = handleActions(
  {
    [ActionTypes.ADD_RECT]: (state) => {
      return state;
    },
    [ActionTypes.SELECT_CANVAS]: (state, action:Action<SelectCanvasPayload>) => {
      if (action.payload === undefined) {
        console.warn('Selected canvas without index.');
        return state;
      }
      return {
        ...state,
        selected_canvas_index: action.payload.index,
      };
    }
  },
  initial_state);
