import { RouteObject, useRoutes } from "react-router";
import Count from "../components/count/Count";
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
  ];
  return <>{useRoutes(routes)}</>;
};
export default Router;
