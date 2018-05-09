import * as Redux from 'redux';
import { Action as RxAction } from 'redux-actions';
import { createEpicMiddleware, Epic as RxEpic } from 'redux-observable';

import { get_canvas } from './canvas/models';
import { workspace_epics } from './canvas/models/epics';
import { CanvasState, canvas_reducer } from './canvas/models/reducers';


export interface Action<T> extends RxAction<T> {
  payload:T;
}

export interface StoreState {
  canvas:CanvasState;
}

export type ReducerMap = {
  [key in keyof StoreState]:Redux.Reducer<any>;
}

export type Store = Redux.Store<StoreState>;

export type Epic = RxEpic<Action<any>, StoreState, typeof dependencies>;


const root_epic = workspace_epics;

const reducer_map:ReducerMap = {
  canvas: canvas_reducer,
};
const root_reducer = Redux.combineReducers(reducer_map);
const dependencies = {
  get_canvas,
};

const epic_middleware = createEpicMiddleware(root_epic, {
  dependencies,
});

let enhancers = Redux.applyMiddleware(epic_middleware);
if (__DEV__) {
  const compose_enhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
  enhancers = compose_enhancers(enhancers);
}

export function create_store() {
  return Redux.createStore(root_reducer, enhancers);
}
