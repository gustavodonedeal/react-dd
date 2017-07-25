import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import fetchMock from 'fetch-mock';

it('renders inital loading state correctly', async () => {
  const json = await import('../../../__tests__/sampleAdvert.json');
  fetchMock.mock('*', [json]);
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
  fetchMock.restore();
});
