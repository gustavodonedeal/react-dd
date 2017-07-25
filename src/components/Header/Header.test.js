import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Header from './Header';

it('renders correctly', async () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
