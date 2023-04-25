import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import DashboardPage from "../feature/dashboard/pages";
import ManageRestaurantPage from "../feature/manageRestaurant/pages/ManageRestaurantPage";
import BaseLayout from "../layouts/BaseLayout";
import LoginPage from "../feature/auth/components/login/LoginPage";
import PrivateRoute from "../layouts/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Navigate to="/dashboard" />,
        index: true,
      },
      {
        path: "/auth",
        element: <LoginPage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            element: <BaseLayout />,
            children: [
              {
                path: "/dashboard",
                element: <DashboardPage />,
              },
              {
                path: "/manage-restaurants",
                element: <ManageRestaurantPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
export default router;
