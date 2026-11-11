import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
// import Menu from "./features/menu/Menu";
//connecting the loader component to the route(step 2)
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as CreateOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error.jsx";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice.js";
import { Provider } from "react-redux";
//router
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/menu",
        element: <Menu />,
        //connecting the loader component to the route(step 2)
        loader: menuLoader,
        errorElement: <Error />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrderAction,
      },

      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
