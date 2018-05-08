import * as React from 'react';

export interface ToolbarButtonProps {
  image:string;
  selected_image?:string;
  on_click:React.MouseEventHandler<HTMLButtonElement>;
}

export interface ToolbarButtonStates {
  selected:boolean;
}

export class ToolbarButton extends React.PureComponent<ToolbarButtonProps, ToolbarButtonStates> {
  render() {
    return (
      <button type="button" onClick={this.props.on_click}>
        <img src={this.props.image} />
        { this.props.selected_image !== undefined && this.state.selected ? 
          <img src={this.props.image} /> : ''}
      </button>
    );
  }
}
