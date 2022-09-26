import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Add from 'pages/Add';
import Home from 'pages/Home';
import Practice from 'pages/Practice';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/practice" element={<Practice />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
