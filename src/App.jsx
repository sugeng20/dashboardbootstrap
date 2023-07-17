import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Signin from "./pages/auth/SignIn";
import Adminlayout from "./layout/Adminlayout";
import Dashboard from "./pages/admin/Dashboard";

const adminRoutes = [{ path: "dashboard", component: <Dashboard /> }];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Signin />}></Route>
      </Route>
      <Route path="auth" element={<RootLayout />}>
        <Route index element={<Signin />}></Route>
      </Route>
      <Route path="admin" element={<Adminlayout />}>
        {adminRoutes.map((index, value) => (
          <Route
            key={index}
            path={value.path}
            element={value.component}
          ></Route>
        ))}
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
