import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Card from './Card';

it('renders inital loading state correctly', async () => {
  const json = await import('../../../__tests__/sampleAdvert.json');
  const immutableAdvert = Object.freeze(json);
  const tree = renderer.create(
    <MemoryRouter>
      <Card ad={immutableAdvert} />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
