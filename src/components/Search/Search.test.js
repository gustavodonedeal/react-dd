import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import fetchMock from 'fetch-mock';
import Search from './Search';

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

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