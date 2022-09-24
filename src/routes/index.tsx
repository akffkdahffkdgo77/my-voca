import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Add from 'pages/Add';
import Home from 'pages/Home';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
