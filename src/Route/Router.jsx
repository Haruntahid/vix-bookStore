import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";
import BestSellBook from "../Pages/BestSellBook";
import Community from "../Pages/Community";
import BookDetails from "../components/BookDetails";
import Wishlist from "../components/Wishlist";
import ReadBooks from "../components/ReadBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../../public/books.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks />,
            loader: () => fetch("../../public/books.json"),
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
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
      {
        path: "/bookdetails/:id",
        element: <BookDetails />,
        loader: () => fetch("../../public/books.json"),
      },
    ],
  },
]);
