// import { useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getWishlistFromLS } from "../utils/localStorage";
import SingleWishlistBook from "./SingleWishlistBook";

function Wishlist() {
  const books = useLoaderData();
  // console.log(wishlistbooks);
  const wishlist = getWishlistFromLS();

  const addedTowishlist = books.filter((book) =>
    wishlist.includes(book.bookId)
  );

  // console.log(addedTowishlist);

  return (
    <div>
      <div className="flex flex-col gap-6">
        {addedTowishlist.map((book) => (
          <SingleWishlistBook key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
