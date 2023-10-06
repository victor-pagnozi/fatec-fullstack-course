import { Outlet } from "react-router-dom";
import { HeaderComponent } from "./shared/components/Header";

export const Layout = () => {
  return (
    <section className="body">
      <HeaderComponent />

      <Outlet />
    </section>
  );
};
