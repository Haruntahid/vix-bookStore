import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getBookFromLS, getWishlistFromLS } from "../utils/localStorage";
import SingleBook from "../components/SingleBook";

function ListedBooks() {
  const [tab, setTab] = useState(0);
  const books = useLoaderData();
  const [readBook, setReadBook] = useState([]);
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    const storeReadBook = getBookFromLS();
    if (books.length > 0) {
      const readBook = [];
      for (const id of storeReadBook) {
        const book = books.find((book) => book.bookId == id);
        if (book) {
          readBook.push(book);
        }
      }
      setReadBook(readBook);
      setDisplayList(readBook);
    }
  }, [books]);

  const [wishlist, setWishlist] = useState([]);
  const [displayWishlist, setDisplayWishlist] = useState([]);

  useEffect(() => {
    const storeWishlist = getWishlistFromLS();
    if (books.length > 0) {
      const wishlist = [];
      for (const id of storeWishlist) {
        const book = books.find((book) => book.bookId == id);
        if (book) {
          wishlist.push(book);
        }
      }
      setWishlist(wishlist);
      setDisplayWishlist(wishlist);
    }
  }, [books]);

  const handelFilter = (filter) => {
    if (filter === "Rating") {
      const filterData = readBook.filter((item) => item.rating >= 0);
      filterData.sort((a, b) => b.rating - a.rating);
      setDisplayList(filterData);
      const filterData2 = wishlist.filter((item) => item.rating >= 0);
      filterData2.sort((a, b) => b.rating - a.rating);
      setDisplayWishlist(filterData2);
    } else if (filter === "Nmbr of pages") {
      const filterData = readBook.filter((item) => item.totalPages >= 0);
      filterData.sort((a, b) => b.totalPages - a.totalPages);
      setDisplayList(filterData);
      const filterData2 = wishlist.filter((item) => item.totalPages >= 0);
      filterData2.sort((a, b) => b.totalPages - a.totalPages);
      setDisplayWishlist(filterData2);
    } else if (filter === "Publish Year") {
      const filterData = readBook.filter((item) => item.yearOfPublishing >= 0);
      filterData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setDisplayList(filterData);
      const filterData2 = wishlist.filter((item) => item.yearOfPublishing >= 0);
      filterData2.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setDisplayWishlist(filterData2);
    }
  };

  return (
    <>
      <div className="py-14 bg-[#1313130D] rounded-3xl">
        <h2 className="text-center text-5xl font-medium ">Listed Books</h2>
      </div>
      <div className="mt-4 mb-14 flex justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]">
            Sort by
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => handelFilter("Rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handelFilter("Nmbr of pages")}>
                Number of pages
              </a>
            </li>
            <li>
              <a onClick={() => handelFilter("Publish Year")}>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* tabs */}
      <div className="flex items-center mb-8 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-[#131313]">
        <Link
          onClick={() => setTab(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tab === 0 ? "border border-b-0 rounded-t-2xl" : "border-b"
          } border-gray-400 text-[#131313CC]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          onClick={() => setTab(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tab === 1 ? "border border-b-0 rounded-t-2xl" : "border-b"
          } border-gray-400 text-[#131313CC]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>
      {/* <Outlet readBook={readBook} /> */}
      {tab === 0 && (
        <div className="flex flex-col gap-6">
          {displayList.map((book) => (
            <SingleBook key={book.bookId} book={book} />
          ))}
        </div>
      )}
      {tab === 1 && (
        <div className="flex flex-col gap-6">
          {displayWishlist.map((book) => (
            <SingleBook key={book.bookId} book={book} />
          ))}
        </div>
      )}
    </>
  );
}

export default ListedBooks;
