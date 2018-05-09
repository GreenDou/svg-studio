import * as React from 'react';
import { AnyAction, Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { StoreState } from '../store';

import * as models from './models';

export interface CanvasProps {
  actions:CanvasBindedActions;
  current_canvas_index:number;
}
export type CanvasBindedActions = typeof binded_actions;

export class SVGCanvasClass extends React.Component<CanvasProps, {}> {
  private element:HTMLElement|null = null;
  private canvas_index?:number;

  constructor(props:CanvasProps) {
    super(props);
    this.on_click = this.on_click.bind(this);
  }
  render() {
    return <div ref={(el) => { this.element = el; }} onClick={this.on_click} />
  }

  componentDidMount() {
    if (this.element === null) {
      throw 'Not support canvas.';
    }
    this.canvas_index = models.add_canvas(this.element);
  }

  on_click() {
    if (this.canvas_index === undefined) {
      console.warn('Click before canvas inited.')
      return;
    }

    if (this.props.current_canvas_index === this.canvas_index) {
      return;
    }
    
    this.props.actions.action_select_canvas(this.canvas_index);
  }
}

const binded_actions = {
  action_select_canvas: models.action_select_canvas,
};



function map_dispatch(dispatch:Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators(binded_actions, dispatch),
  };
}

export const SVGCanvas = connect((state:StoreState) => {
  return {
    current_canvas_index: state.canvas.selected_canvas_index,
  };
}, map_dispatch)(SVGCanvasClass); 
