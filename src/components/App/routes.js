import React from 'react';
import universal from 'react-universal-component';
import { fetchAdvert } from '../Advert/reducer';

const UniversalRoute = universal(({ component }) => import(`../${component}`));
const AdvertPage = props => <UniversalRoute component={'Advert'} {...props} />;
const SearchPage = props => <UniversalRoute component={'Search'} {...props} />;

const routes = [
  {
    path: '/ad/:adId',
    component: AdvertPage,
    loadData: ({ params }) => fetchAdvert(params.adId)
  },
  {
    path: '/',
    component: SearchPage
  }
];

export default routes;
