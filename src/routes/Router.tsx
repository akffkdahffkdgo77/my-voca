import { createBrowserRouter } from 'react-router-dom';

import BaseLayout from '@layout';
import Add from '@pages/Add';
import ErrorPage from '@pages/Error';
import Home from '@pages/Home';
import Memorize from '@pages/Memorize';
import Practice from '@pages/Practice';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'add',
                element: <Add />
            },
            {
                path: 'memorize',
                element: <Memorize />
            },
            {
                path: 'practice',
                element: <Practice />
            }
        ]
    }
]);

export default router;
