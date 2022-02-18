import { baseUrl, routeData } from "../config/config";
import AppLayout from "../../App";

const routes = [
  {
    path: `${baseUrl}`,
    exact: true,
    component: panel,
  },
  {
    path: `${baseUrl}${RouteData.PRODUCTS}`,
    component: products,
  },
];
export default routes;
