import { createBrowserRouter } from 'react-router-dom';

import Layout from 'layout';
import Add from 'pages/Add';
import Home from 'pages/Home';
import { List, ListDetail } from 'pages/List';
import Memorize from 'pages/Memorize';
import Practice from 'pages/Practice';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
                path: 'list',
                children: [
                    {
                        path: '',
                        element: <List />
                    },
                    {
                        path: ':id',
                        element: <ListDetail />
                    }
                ]
            },
            {
                path: 'memorize/:id',
                element: <Memorize />
            },
            {
                path: 'practice/:id',
                element: <Practice />
            }
        ]
    }
]);

export default router;
