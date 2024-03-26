import { useLoaderData } from "react-router-dom";
import { getBookFromLS } from "../utils/localStorage";
import SingleReadBook from "./SingleReadBook";

function ReadBooks() {
  const books = useLoaderData();
  const storebooks = getBookFromLS();
  const addedToRead = books.filter((book) => storebooks.includes(book.bookId));

  return (
    <div className="flex flex-col gap-6">
      {addedToRead.map((book) => (
        <SingleReadBook key={book.bookId} book={book} />
      ))}
    </div>
  );
}

export default ReadBooks;
