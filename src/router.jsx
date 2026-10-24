import { createBrowserRouter } from "react-router";
import App from "./App";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "login", Component: LoginForm },
      { path: "register", Component: RegisterForm },
    ],
  },
]);
