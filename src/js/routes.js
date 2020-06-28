import Listen from '../pages/Listen';
import Browse from '../pages/Browse';
import Radio from '../pages/Radio';
import Library from '../pages/Library';
import Search from '../pages/Search';

const routes = [
  {
    path: '/listen/',
    component: Listen,
  },
  {
    path: '/browse/',
    component: Browse,
  },
  {
    path: '/radio/',
    component: Radio,
  },
  {
    path: '/library/',
    component: Library,
  },
  {
    path: '/search/',
    component: Search,
  },
  {
    path: '/app/:id',
    asyncComponent: () => import(/* webpackChunkName: "app-details" *//* webpackPreload: true */ '../pages/AppDetails'),
  },
  {
    path: '/account/',
    popup: {
      asyncComponent: () => import(/* webpackChunkName: "account" *//* webpackPreload: true */ '../pages/Account'),
    },
  },
  {
    path: '(.*)',
    asyncComponent: () => import(/* webpackChunkName: "404" */ '../pages/404'),
  },
];

export default routes;
