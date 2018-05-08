import * as Redux from 'redux';
import { Action as RxAction } from 'redux-actions';
import { createEpicMiddleware, Epic as RxEpic } from 'redux-observable';

import { get_workspace } from './workspace/models';
import { workspace_epics } from './workspace/models/epics';
import { toolbar_reducer } from './toolbar/models/reducer';


export interface Action<T> extends RxAction<T> {
  payload:T;
}

export interface State {

}

export type Store = Redux.Store<State>;

export type Epic = RxEpic<Action<any>, State, typeof dependencies>;


const root_epic = workspace_epics;
const root_reducer = Redux.combineReducers({
  toolbar_reducer,
});
const dependencies = {
  get_workspace,
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
