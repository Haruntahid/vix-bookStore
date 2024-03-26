// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { setBookInLs } from "../utils/localStorage";

function BookDetails() {
  // handel read button
  const handelReadBtn = (bookId) => {
    setBookInLs(bookId);
  };

  //   const [books, setBooks] = useState([]);
  //   useEffect(() => {
  //     fetch("../../public/books.json")
  //       .then((res) => res.json())
  //       .then((data) => setBooks(data));
  //   }, []);
  const books = useLoaderData();

  const { id } = useParams();

  const currentBookId = books.find((book) => book.bookId == id);

  const {
    bookId,
    author,
    image,
    bookName,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = currentBookId;
  console.log(currentBookId);

  return (
    <>
      <div className="flex gap-14">
        <div className="w-2/5 flex-grow p-20 bg-[#1313130D] rounded-3xl flex items-center justify-center">
          <img className="w-[75%]" src={image} alt="" />
        </div>
        <div className="w-3/5">
          <h2 className="font-bold text-4xl">{bookName}</h2>
          <p className="font-medium text-xl">By : {author}</p>
          <div className="divider"></div>
          <p className="font-medium text-xl">{category}</p>
          <div className="divider"></div>
          <p>
            <span className="font-bold">Review : </span>
            {review}
          </p>
          <div className="flex gap-4 my-6 items-center">
            <p className="text-xl font-bold">Tags</p>
            <p className="px-3 py-1 rounded-full text-[#23BE0A] bg-[#23BE0A33]">
              #{tags[0]}
            </p>
            <p className="px-3 py-1 rounded-full text-[#23BE0A] bg-[#23BE0A33]">
              #{tags[1]}
            </p>
          </div>
          <div className="divider"></div>
          <div className="space-y-2">
            <p className="text-[#131313B3]">
              Number of Pages :{" "}
              <span className="font-bold text-black">{totalPages}</span>
            </p>
            <p className="text-[#131313B3]">
              Publisher :{" "}
              <span className="font-bold text-black">{publisher}</span>
            </p>
            <p className="text-[#131313B3]">
              Year of Publishing :{" "}
              <span className="font-bold text-black">{yearOfPublishing}</span>
            </p>
            <p className="text-[#131313B3]">
              Rating : <span className="font-bold text-black">{rating}</span>
            </p>
          </div>
          <div className="mt-8 flex gap-5">
            <button
              onClick={() => handelReadBtn(bookId)}
              className="btn px-7 py-1 border border-gray-200"
            >
              Read
            </button>
            <button className="btn px-7 py-1 bg-[#50B1C9] text-white border border-gray-200">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
