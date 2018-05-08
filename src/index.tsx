import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { Workspace } from './workspace';
import { create_store } from './store';
import { Toolbar } from './toolbar';

render(
  <Provider store={create_store()} >
    <div>
      <Toolbar />
      <Workspace />
      <Workspace />
      <Workspace />
    </div>
  </Provider>,
  document.getElementById('root'),
)
