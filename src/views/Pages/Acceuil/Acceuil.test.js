import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Acceuil from './Acceuil';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Acceuil/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
