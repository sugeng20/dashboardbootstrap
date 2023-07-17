import Dashboard from "../pages/admin/Dashboard";
import Signin from "../pages/auth/SignIn";

const authRoutes = [{ path: "/auth/signin", element: <Signin /> }];

const adminRoutes = [{ path: "dashboard", element: <Dashboard /> }];
export { authRoutes, adminRoutes };
