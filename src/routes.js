import React from 'react';

const Home = React.lazy(() => import('./components/Home'));
const FavQuotes = React.lazy(() => import('./components/FavQuotes'));
const RandQuoteList = React.lazy(() => import('./components/RandQuoteList'));
const FavQuotesChoose = React.lazy(() => import('./components/FavQuotesChoose'));

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    exact: true,
  },
  {
    path: '/rand_quote',
    name: 'Random Quotes List',
    component: RandQuoteList,
  },
  {
    path: '/fav_quotes',
    name: 'Choose Favorite Quotes',
    component: FavQuotes,
  },
  {
    path: '/fav_quotes_choosen',
    name: 'Favorite Quotes',
    component: FavQuotesChoose,
  },
];

export default routes;