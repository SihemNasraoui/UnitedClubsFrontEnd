import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Club } from './Club';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Club/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
