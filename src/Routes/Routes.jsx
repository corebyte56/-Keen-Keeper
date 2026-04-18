import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "../Pages/HomePage/HomePage";
import MainLayout from "../Layout/mainLayout";
import TimeLine from "../Pages/TimeLine/TimeLine";
import States from "../Pages/States/States";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/FriendDetails/:Id",
        element: <FriendDetails />,
        
        loader: async () => {
          try {
            
            const res = await fetch(
              `${window.location.origin}/friendData.json`,
            );
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return await res.json();
          } catch (error) {
            console.error("Fetch error:", error);
            return []; 
          }
        },
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/States",
        element: <States />,
      },
    ],
  },
]);
