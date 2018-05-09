import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { SVGCanvas } from './canvas';
import { create_store } from './store';
import { Toolbar } from './toolbar';

render(
  <Provider store={create_store()} >
    <div>
      <Toolbar />
      <SVGCanvas />
      <SVGCanvas />
      <SVGCanvas />
    </div>
  </Provider>,
  document.getElementById('root'),
)
