import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const auth = "auth"
    return auth ? (
        <Outlet />
    ) : (
        <Navigate to="/auth" />
    );
};

export default ProtectedRoutes;
