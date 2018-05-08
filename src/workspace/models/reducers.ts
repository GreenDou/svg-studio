/**
 * Reducers of Canvas
 */
import { createActions, handleActions } from 'redux-actions';

const ADD_RECT = 'ADD_RECT';
const { act_add_rect } = createActions(ADD_RECT);

const initial_state = {
  selected_ws_index: 0,
};

export const toolbar_reducer = handleActions(
  {
    [ADD_RECT]: (state) => {
      return state;
    },
  },
  initial_state);
