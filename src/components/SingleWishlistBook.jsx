import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SingleWishlistBook({ book }) {
  const {
    bookId,
    author,
    image,
    bookName,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <>
      <div className="p-6 border border-gray-300 rounded-xl flex gap-10 items-center">
        <div className="bg-[#F3F3F3] w-[15%] h-[250px] flex justify-center items-center rounded-2xl">
          <img className="w-[134px] h-[166px]" src={image} alt="" />
        </div>
        <div className="">
          <p className="text-2xl font-bold">{bookName}</p>
          <p>By : {author}</p>
          <div className="flex gap-4 my-4 items-center">
            <p className="font-bold">Tag</p>
            <p className="px-3 py-1 rounded-full text-[#23BE0A] font-semibold bg-[#23BE0A33]">
              #{tags[0]}
            </p>
            <p className="px-3 py-1 rounded-full text-[#23BE0A] font-semibold bg-[#23BE0A33]">
              #{tags[1]}
            </p>
            <p>Year of Publishing : {yearOfPublishing}</p>
          </div>
          <div className="flex gap-5">
            <p>Publisher : {publisher}</p>
            <p>Page : {totalPages}</p>
          </div>
          <div className="divider"></div>
          <div className="flex gap-5  items-center">
            <button className="px-5 py-2 text-[#328EFF] rounded-full bg-[#328EFF26]">
              Category : {category}
            </button>
            <button className="px-5 py-2 text-[#FFAC33] rounded-full bg-[#FFAC3326]">
              Rating : {rating}
            </button>
            <Link
              to={`/bookdetails/${bookId}`}
              className="px-5 py-2 text-white rounded-full bg-[#23BE0A]"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

SingleWishlistBook.propTypes = {
  book: PropTypes.object,
};

export default SingleWishlistBook;
