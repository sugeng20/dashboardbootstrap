import { Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Adminlayout from "../layout/Adminlayout";

const AdminRoute = () => {
  const adminRoutes = [{ path: "dashboard", element: <Dashboard /> }];
  return (
    <Route path="admin" element={<Adminlayout />}>
      {adminRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}></Route>
      ))}
    </Route>
  );
};

export default AdminRoute;
