import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./screens/home/HomePage";
import NotFound from "./screens/not-found/NotFound";
import ResumeForm from "./screens/resume-form/ResumeForm";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/resume-form",
    element: <ResumeForm />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
