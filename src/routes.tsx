import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "./appConfig";
import PHome from "./Pages/PHome/PHome";
import PLogin from "./Pages/PLogin/PLogin";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome/>} />
                <Route path={APP_ROUTES.ROUTE_LOGIN} element={<PLogin/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;