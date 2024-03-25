import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";
import BestSellBook from "../Pages/BestSellBook";
import Community from "../Pages/Community";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
      },
      {
        path: "/pagesread",
        element: <PagesToRead />,
      },
      {
        path: "/bestsell",
        element: <BestSellBook />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      //   {
      //     path: "/community",
      //     element: <Community />,
      //   },
    ],
  },
]);
