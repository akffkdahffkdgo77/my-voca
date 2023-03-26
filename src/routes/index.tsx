import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BaseLayout from 'features/Layout/BaseLayout';
import Add from 'pages/Add';
import Home from 'pages/Home';
import Memorize from 'pages/Memorize';
import Practice from 'pages/Practice';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/memorize" element={<Memorize />} />
                    <Route path="/practice" element={<Practice />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
