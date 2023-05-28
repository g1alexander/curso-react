import { Outlet } from "react-router-dom";
import { Navbar, UserProvider } from ".";

export default function MainApp() {
  return (
    <UserProvider>
      <h1>Main</h1>

      <Navbar />

      <Outlet />
    </UserProvider>
  );
}
