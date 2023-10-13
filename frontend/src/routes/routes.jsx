import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../screen/layout/HomeLayout";
import Error from "../screen/error/Error";
import Landing from "../screen/landing/Landing";
import SignUp from "../screen/auth/SignUp";
import SignIn from "../screen/auth/SignIn";
import DashboardLayout from "../screen/layout/DashboardLayout";
import CreateIncident from "../screen/incident/CreateIncident";
import CreateIdea from "../screen/idea/CreateIdea";
import Profile from "../screen/user/Profile";
import Dashboard from "../screen/layout/Dashboard";
import Project from "../screen/project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "createincident",
            element: <CreateIncident />,
          },
          {
            path: "createidea",
            element: <CreateIdea />,
          },
          {
            path: "projectidea",
            element: <Project />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

const routes = () => {
  return <RouterProvider router={router} />;
};

export default routes;
