import { createBrowserRouter } from 'react-router-dom';

import RootBoundary from 'app/RootBoundary';
import { Layout } from 'layout';
import Guide from 'pages/Guide';
import Home from 'pages/Home';
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
                element: <Home />
            },
            {
                path: 'test',
                element: <Test />
            },
            {
                path: 'guide',
                element: <Guide />
            }
        ]
    }
]);

export default router;
