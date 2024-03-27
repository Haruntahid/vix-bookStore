import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Book({ book }) {
  const { bookId, image, tags, author, bookName, category, rating } = book;
  return (
    <>
      <Link
        to={`/bookdetails/${bookId}`}
        className="card  bg-base-100 shadow-xl p-3 lg:p-6 border border-[#13131326]"
      >
        <div className="bg-[#F3F3F3] w-full h-[250px] lg:h-[300px] flex justify-center items-center rounded-2xl">
          <img className="w-[134px] h-[166px]" src={image} alt="book" />
        </div>
        <div className="">
          <div className="flex gap-4 my-4">
            <p className="px-3 py-1 rounded-full text-[#23BE0A] bg-[#23BE0A33]">
              {tags[0]}
            </p>
            <p className="px-3 py-1 rounded-full text-[#23BE0A] bg-[#23BE0A33]">
              {tags[1]}
            </p>
          </div>
          <p className="text-2xl font-bold">{bookName}</p>
          <p>By : {author}</p>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <p>{category}</p>
            <p className="flex gap-3 items-center">
              {rating} <FaRegStar size={18} />
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
