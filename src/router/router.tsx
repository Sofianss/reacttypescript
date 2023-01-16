import { RouteObject, useRoutes } from "react-router";
import Count from "../components/count/Count";
import HerosList from "../pages/HerosList";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <HerosList />,
    },
    {
      path: "/count",
      element: <Count />,
    },
  ];
  return <>{useRoutes(routes)}</>;
};
export default Router;
