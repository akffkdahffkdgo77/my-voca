import { HashRouter, Route, Routes } from 'react-router-dom';

import Add from 'pages/Add';
import Home from 'pages/Home';
import Memorize from 'pages/Memorize';
import Practice from 'pages/Practice';

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/memorize" element={<Memorize />} />
                <Route path="/practice" element={<Practice />} />
            </Routes>
        </HashRouter>
    );
}
export default Router;
