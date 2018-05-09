import * as svg from 'svg.js';
export * from './actions';

type Workspace = svg.Doc;

const workspaces:Workspace[] = new Array(20);
let length = 0;

export function add_canvas(element:HTMLElement) {
  const ws = (svg as svg.Library)(element);
  workspaces[length++] = ws;
  return length - 1;
}

export function get_canvas(index:number) {
  const ws = workspaces[index];
  if (workspaces[index] == undefined) {
    throw new Error('Cannot use workspace before init.');
  }
  return ws;
}
