import { createHashRouter, RouterProvider } from 'react-router-dom';

import { BaseLayout, DesignLayout } from '@layouts/index';

import Export from '@pages/Export';
import Guide from '@pages/Guide';
import Home from '@pages/Home';
import Register from '@pages/Register';
import Test from '@pages/Test';

import RootBoundary from './RootBoundary';

const App = () => {
  return (
    <RouterProvider
      router={createHashRouter([
        {
          path: '/',
          element: <BaseLayout />,
          errorElement: <RootBoundary />,
          children: [
            {
              path: '',
              element: <Home />,
            },
            {
              path: 'register',
              element: <Register />,
            },
            {
              path: 'test/:wordListIdx',
              element: <Test />,
            },
            {
              path: 'export',
              element: <Export />,
            },
          ],
        },
        {
          path: '/guide',
          element: <DesignLayout />,
          children: [
            {
              path: '',
              element: <Guide />,
            },
          ],
        },
      ])}
    />
  );
};

export default App;
