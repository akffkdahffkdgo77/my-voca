import { createBrowserRouter } from 'react-router-dom';

import RootBoundary from 'app/RootBoundary';
import { Layout } from 'layout';
import Editor from 'pages/Editor';
import Guide from 'pages/Guide';
import List from 'pages/List';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <RootBoundary />,
        children: [
            {
                path: '',
                element: <List />
            },
            {
                path: ':id',
                element: <Editor />
            },
            {
                path: 'guide',
                element: <Guide />
            }
        ]
    }
]);

export default router;
