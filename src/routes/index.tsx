import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Add from 'pages/Add';
import Home from 'pages/Home';
import Memorize from 'pages/Memorize';
import Practice from 'pages/Practice';

function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/memorize" element={<Memorize />} />
                <Route path="/practice" element={<Practice />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
