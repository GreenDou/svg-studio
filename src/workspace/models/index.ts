import * as svg from 'svg.js';

type Workspace = svg.Doc;

const workspaces:Workspace[] = new Array(20);
let length = 0;

export function add_workspace(element:HTMLElement) {
  const ws = (svg as svg.Library)(element);
  workspaces[length++] = ws;
  return ws;
}

export function get_workspace(index:number) {
  const ws = workspaces[index];
  if (workspaces[index] == undefined) {
    throw new Error('Cannot use workspace before init.');
  }
  return ws;
}
