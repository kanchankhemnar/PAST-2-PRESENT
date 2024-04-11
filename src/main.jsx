import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HomePage2 from "./Pages/HomePage2/HomePage2";
import HomePage3 from "./Pages/HomePage3/HomePage3";
import MyProfile from "./Pages/MyProfile/MyProfile";
import MyRequests from "./Pages/MyRequests/MyRequests";
import MyUploads from "./Pages/MyUploads/MyUploads";
import LoginForm from "./Components/LoginForm/LoginForm.jsx";
import SellerForm from "./Components/SellerForm/SellerForm.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import { AuthProvider } from "./Components/ContextAPI/AuthContext.jsx";
import RequestItem from "./Components/Request_item/RequestItem.jsx";
import AboutUsPage from "./Components/AboutUs/AboutUsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Shop",
        element: <HomePage2 />,
      },
      {
        path: "/ShopItems/:id",
        element: <HomePage3 />,
      },
      {
        path: "/ShopItems/:name",
        element: <HomePage2 />,
      },
      {
        path: "/MyProfile",
        element: <MyProfile />,
      },
      {
        path: "/MyRequests",
        element: <MyRequests />,
      },
      {
        path: "/MyUploads",
        element: <MyUploads />,
      },
      {
        path: "/SellerForm",
        element: <SellerForm />,
      },
      {
        path: "/Login",
        element: <LoginForm />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path:"/Requests",
        element:<RequestItem/>
      },
      {
        path:"/AboutUs",
        element:<AboutUsPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

      <App />
    </AuthProvider>
  </React.StrictMode>
);
