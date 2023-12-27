import { createBrowserRouter } from 'react-router-dom';

import RootBoundary from 'app/RootBoundary';
import { Layout } from 'layout';
import Export from 'pages/Export';
import Guide from 'pages/Guide';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Test from 'pages/Test';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <RootBoundary />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'test/:wordListIdx',
                element: <Test />
            },
            {
                path: 'export',
                element: <Export />
            },
            {
                path: 'guide',
                element: <Guide />
            }
        ]
    }
]);

export default router;
