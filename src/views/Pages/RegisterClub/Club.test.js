import React from 'react';
import ReactDOM from 'react-dom';
import Club from './Club';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Club/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
