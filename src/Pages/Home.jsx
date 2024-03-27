import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Book from "../components/Book";

function Home() {
  const books = useLoaderData();
  // console.log(books);
  return (
    <div>
      <Banner />
      <div className="mt-12 lg:mt-24">
        <h2 className=" mb-9 text-center font-bold text-3xl lg:text-4xl">
          All Books
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {books.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
