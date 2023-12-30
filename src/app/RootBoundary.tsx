import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { DefaultError, NotFound } from 'components/Error';

// Reference : https://reactrouter.com/en/main/route/error-element
export default function RootBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <NotFound />;
        }
    }

    return <DefaultError />;
}
