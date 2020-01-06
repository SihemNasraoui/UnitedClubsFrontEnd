import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Carousel from './Carousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Carousel/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
