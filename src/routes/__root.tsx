import { createRootRoute } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header';
import App from './index';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <App />
      {/* <Outlet /> */}
      {/* <TanStackRouterDevtools /> */}
    </>
  )
})
