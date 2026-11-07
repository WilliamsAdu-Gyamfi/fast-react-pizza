import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Menu from "../features/menu/Menu";

function AppLayout() {
  return (
    <div>
      {/* <Menu /> */}
      <Header />
      <CartOverview />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
