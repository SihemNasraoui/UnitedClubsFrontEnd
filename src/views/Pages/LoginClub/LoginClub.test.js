import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginClub from './LoginClub';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><LoginClub/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
