import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import AddCraftItems from "./Pages/AddCraftItems/AddCraftItems";
import AllCraftItems from "./Pages/AllCraftItems/AllCraftItems";
import MyCraftList from "./Pages/MyCraftList/MyCraftList";
import { HelmetProvider } from "react-helmet-async";
import ErrorPage404 from "./Pages/ErrorPage404/ErrorPage404";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import FirebaseAuthProvider from "./FirebaseAuthProvider/FirebaseAuthProvider";
import ViewDetail from "./components/ViewDetail/ViewDetail";
import PrivateDetails from "./PrivateRoute/PrivateDetails";
import UpdateCraftItem from "./components/UpdateCraftItem/UpdateCraftItem";
import CategoryOutput from "./components/CategoryOutput/CategoryOutput";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage404></ErrorPage404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/decor"),
      },
      {
        path: "/allCraftItems",
        element: <AllCraftItems></AllCraftItems>,
        loader: () => fetch("http://localhost:5000/decor"),
      },
      {
        path: "/addCraftItems",
        element: (
          <PrivateDetails>
            <AddCraftItems></AddCraftItems>
          </PrivateDetails>
        ),
      },
      {
        path: "/myCraftList",
        element: (
          <PrivateDetails>
            <MyCraftList></MyCraftList>
          </PrivateDetails>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/viewDetail/:_id",
        element: (
          <PrivateDetails>
            <ViewDetail></ViewDetail>
          </PrivateDetails>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/decor/${params._id}`),
      },
      {
        path: "/updateCraftItem/:_id",
        element: (<PrivateDetails>
          <UpdateCraftItem></UpdateCraftItem>
        </PrivateDetails>),
        loader:({params}) => fetch(`http://localhost:5000/decor/${params._id}`)
      },
      {
        path: "/category/:category",
        element: <CategoryOutput></CategoryOutput>,
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </FirebaseAuthProvider>
  </React.StrictMode>
);
