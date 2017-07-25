import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Search from './Search';

it('renders "No Results found" correctly', () => {
  const tree = renderer.create(
    <Search ads={[]} loading={true} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a search result correctly', async () => {
  const json = await import('../../../__tests__/sampleAdvert.json');
  const immutableAd = Object.freeze(json);
  const tree = renderer.create(
    <MemoryRouter>
        <Search ads={[immutableAd]} loading={false} />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
