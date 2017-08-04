import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import fetchMock from 'fetch-mock';
import Search from './Search';

it('renders "No Results found" correctly', async () => {
  const json = await import('../../../__tests__/sampleAdvert.json');
  fetchMock.mock('*', [json]);
  const tree = renderer.create(
    <MemoryRouter>
      <Search />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
  fetchMock.restore();
});