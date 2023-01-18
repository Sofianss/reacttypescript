import { RouteObject, useRoutes } from "react-router";

import Count from "../components/count/Count";
import Get from "../components/fetch/Get";
import GetId from "../components/fetch/GetId";
import Form from "../components/form/Form";
import HerosCreate from "../pages/HerosCreate";

import HerosDetails from "../pages/HerosDetails";
import HerosEdit from "../pages/HerosEdit";
import HerosList from "../pages/HerosList";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <HerosList />,
    },
    {
      path: "/:id",
      element: <HerosDetails />,
    },
    {
      path: "/count",
      element: <Count />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/fetch",
      element: <Get />,
    },
    {
      path: "/fetch/:id",
      element: <GetId />,
    },
    {
      path: "/edit/:id",
      element: <HerosEdit />,
    },
    {
      path: "/create",
      element: <HerosCreate />,
    },
  ];
  return <>{useRoutes(routes)}</>;
};
export default Router;
