import { RouteObject, useRoutes } from "react-router";
import Count from "../components/count/Count";
import Form from "../components/form/Form";
import HerosDetails from "../pages/HerosDetails";
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
  ];
  return <>{useRoutes(routes)}</>;
};
export default Router;
