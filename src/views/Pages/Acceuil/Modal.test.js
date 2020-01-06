import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Modal1 from './Modal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Modal1/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
