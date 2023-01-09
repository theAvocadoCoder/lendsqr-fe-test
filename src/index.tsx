import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Users, {loader as usersLoader} from './pages/Users';
import UserDetails from './pages/UserDetails';
import DocumentsTab from './pages/UserDetails/components/DocumentsTab';
import BankDetailsTab from './pages/UserDetails/components/BankDetailsTab';
import LoansTab from './pages/UserDetails/components/LoansTab';
import SavingsTab from './pages/UserDetails/components/SavingsTab';
import AppAndSystemTab from './pages/UserDetails/components/AppAndSystemTab';
import GeneralDetailsTab from './pages/UserDetails/components/GeneralDetailsTab';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users/",
        element: <Users />,
        loader: usersLoader,
      },
      {
        path: "users/:id/",
        element: <UserDetails />,
        children: [
          {
            index: true,
            element: <GeneralDetailsTab />,
          },
          {
            path: "documents/",
            element: <DocumentsTab />,
          },
          {
            path: "bank-details/",
            element: <BankDetailsTab />,
          },
          {
            path: "loans/",
            element: <LoansTab />,
          },
          {
            path: "savings/",
            element: <SavingsTab />,
          },
          {
            path: "app-and-system/",
            element: <AppAndSystemTab />,
          },
        ]
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
