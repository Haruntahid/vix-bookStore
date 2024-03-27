import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SingleBook({ book }) {
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
      <div className="p-3 lg:p-6 border border-gray-300 rounded-xl flex flex-col lg:flex-row gap-2 lg:gap-10 items-center">
        <div className="bg-[#F3F3F3] w-full lg:w-[15%] h-[200px] lg:h-[250px] flex justify-center items-center rounded-2xl">
          <img className="w-[134px] h-[166px]" src={image} alt="" />
        </div>
        <div className="">
          <p className="text-xl lg:text-2xl font-bold">{bookName}</p>
          <p>By : {author}</p>
          <div className="flex gap-4 my-1 lg:my-4 items-center flex-wrap">
            <p className="font-bold">Tag</p>
            <p className="px-3 py-1 rounded-full text-[#23BE0A] font-semibold bg-[#23BE0A33]">
              #{tags[0]}
            </p>
            <p className="px-3 py-1 rounded-full text-[#23BE0A] font-semibold bg-[#23BE0A33]">
              #{tags[1]}
            </p>
            <p>Year of Publishing : {yearOfPublishing}</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-5">
            <p>Publisher : {publisher}</p>
            <p>Page : {totalPages}</p>
          </div>
          <div className="divider hidden lg:block"></div>
          <div className="flex gap-5 flex-wrap  items-center mt-4">
            <button className="px-3 lg:px-5 py-1 lg:py-2 text-[#328EFF] rounded-full bg-[#328EFF26]">
              Category : {category}
            </button>
            <button className="px-3 lg:px-5 py-1 lg:py-2 text-[#FFAC33] rounded-full bg-[#FFAC3326]">
              Rating : {rating}
            </button>
            <Link
              to={`/bookdetails/${bookId}`}
              className="px-3 lg:px-5 py-1 lg:py-2 text-white rounded-full bg-[#23BE0A]"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

SingleBook.propTypes = {
  book: PropTypes.object,
};

export default SingleBook;
