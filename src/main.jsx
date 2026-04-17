import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./Routes/Routes";
import Context from "./Context/Context";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Context>
    <RouterProvider router={router} />
  </Context>,
);
