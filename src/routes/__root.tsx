import { createRootRoute } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header';
import NotFound from '../components/NotFound';
import { Outlet } from '@tanstack/react-router';
// import App from './index';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      {/* <App /> */}
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
  notFoundComponent: () => <NotFound />
})
