import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import fetchMock from 'fetch-mock';
import View from './View';

it('renders "empty ad" correctly', async () => {
  const json = await import('../../../__tests__/sampleAdvert.json');
  fetchMock.mock('*', [json]);
  const context = {};
  const tree = renderer.create(
    <View match={{ params: { adId: 16140864 }}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
  fetchMock.restore();
});