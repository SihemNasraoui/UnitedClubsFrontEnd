import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Verifiction } from './Verification';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Verifiction/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
