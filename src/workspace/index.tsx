import * as React from 'react';

import * as models from './models';

export interface WorkspaceProps {
}

export class Workspace extends React.Component<WorkspaceProps, {}> {
  private element:HTMLElement|null = null;
  render() {
    return <div ref={(el) => { this.element = el; }} />
  }

  componentDidMount() {
    if (this.element === null) {
      throw 'Not support canvas.';
    }
    models.add_workspace(this.element);
  }
}
