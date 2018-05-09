import { combineEpics, ActionsObservable } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';
import 'svg.draggable.js';

import * as I from '../../public_interfaces';

import * as A from './actions';

const epic_add_rect:I.Epic = 
  (action$:ActionsObservable<I.Action<A.AddRectPayload>>, store, deps) => 
    action$.ofType(A.ActionTypes.ADD_RECT)
      .pipe(
        tap((action) => {
          const workspace = deps.get_canvas(
              store.value.canvas.selected_canvas_index);
          
          const rect = workspace.rect(100, 100).attr({ fill: '#f06' });
          (rect as any).draggable();

        }),
        ignoreElements(),
      );

export const workspace_epics = combineEpics(
  epic_add_rect,
);
