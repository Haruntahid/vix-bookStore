import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function ListedBooks() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <div className="py-14 bg-[#1313130D] rounded-3xl">
        <h2 className="text-center text-5xl font-medium ">Listed Books</h2>
      </div>
      {/* sort */}
      <div className="flex justify-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]">
            Sort by
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      {/* tabs */}

      <div className="flex items-center mb-8 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-[#131313]">
        <Link
          to={""}
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
          to={"wishlist"}
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
      <Outlet />
    </>
  );
}

export default ListedBooks;
