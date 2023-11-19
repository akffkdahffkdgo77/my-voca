import { createBrowserRouter } from 'react-router-dom';

import RootBoundary from 'app/RootBoundary';
import { Layout } from 'layout';
import Guide from 'pages/Guide';
import Home from 'pages/Home';

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
                path: 'Guide',
                element: <Guide />
            }
        ]
    }
]);

export default router;
