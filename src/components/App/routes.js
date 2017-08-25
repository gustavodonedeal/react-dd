import React from "react";
import universal from "react-universal-component";
import { fetchAdvert } from "../Advert/reducer";

const UniversalRoute = universal(({ component }) => import(`../${component}`));
const AdvertPage = props => <UniversalRoute component={"Advert"} {...props} />;

const routes = [
  {
    path: "/ad/:adId",
    component: AdvertPage,
    loadData: ({ params }) => fetchAdvert(params.adId)
  }
];

export default routes;
