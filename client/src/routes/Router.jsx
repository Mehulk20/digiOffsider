import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../components/UI/AppLayout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function Router() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
