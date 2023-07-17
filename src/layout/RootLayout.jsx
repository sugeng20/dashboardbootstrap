import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="auth-multi-layout">
      <div className="auth-box">
        <Outlet />
      </div>
    </div>
  );
}
