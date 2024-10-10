import { lazy } from "react";

const User = lazy(() => import("pages/admin"));
const Default = lazy(() => import("pages/default"));
const NotFound = lazy(() => import("pages/notFound"));
const Difficulty = lazy(() => import("pages/difficulty"));
const Student = lazy(() => import("pages/student"));
const Subject = lazy(() => import("pages/subject"));
const Teacher = lazy(() => import("pages/teacher"));
const Problem = lazy(() => import("pages/problem"));
const LocalizationPanel = lazy(() => import("pages/localizationPanel"));
// const Login = lazy(() => import("pages/login"));

export interface IRoute {
  path: string;
  key?: string | "*";
  element: JSX.Element;
  inner?: IRoute[];
  index?: boolean;
  title: string;
}

const privateRoutes: IRoute[] = [
  {
    path: "/",
    key: "welcome",
    title: "Welcome",
    element: <Default />,
  },
  {
    path: "/profile",
    key: "profile",
    title: "Profile",
    element: <User />,
  },
  {
    path: "/difficulties",
    key: "difficulties",
    title: "Qiyinliklar",
    element: <Difficulty />,
  },
  {
    path: "/subjects",
    key: "subjects",
    title: "Fanlar",
    element: <Subject />,
  },
  {
    path: "/students",
    key: "students",
    title: "O'quvchilar",
    element: <Student />,
  },
  {
    path: "/teachers",
    key: "teachers",
    title: "O'qituvchilar",
    element: <Teacher />,
  },
  {
    path: "/problems",
    key: "problems",
    title: "Masalalar",
    element: <Problem />,
  },
  {
    path: "/translations",
    key: "translations",
    title: "Tarjimalar",
    element: <LocalizationPanel />,
  },
  {
    path: "*",
    key: "*",
    title: "",
    element: <NotFound />,
  },
];

const publicRoutes: IRoute[] = [
  // {
  //   path: "/login",
  //   access: [],
  //   title: "Login",
  //   element: <Login />,
  // },
];

export { privateRoutes, publicRoutes };
