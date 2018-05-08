import * as React from 'react';
import { AnyAction, Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ToolbarButton } from './button';
import { action_add_rect } from '../workspace/models/actions';

export interface ToolbarProps {
  actions:ReturnType<typeof map_dispatch>['actions'];
}

export class ToolbarClass extends React.Component<ToolbarProps> {
  constructor(props:ToolbarProps) {
    super(props);
    this.add_rect = this.add_rect.bind(this);
  }
  render() {
    return (
    <div>
      <ToolbarButton image="" on_click={this.add_rect}/>
    </div>);
  }

  add_rect(event:React.MouseEvent<Node>) {
    this.props.actions.action_add_rect(0);
  }
}

function map_dispatch(dispatch:Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators({
      action_add_rect,
    }, dispatch),
  };
}



export const Toolbar = connect(undefined, map_dispatch)(ToolbarClass); 
