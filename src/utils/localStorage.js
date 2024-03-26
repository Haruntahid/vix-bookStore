import { toast } from "react-toastify";

export const getBookFromLS = () => {
  const getBooks = localStorage.getItem("book");
  if (getBooks) {
    return JSON.parse(getBooks);
  }
  return [];
};

export const setBookInLs = (id) => {
  const storeBooks = getBookFromLS();
  if (!storeBooks.includes(id)) {
    storeBooks.push(id);
    localStorage.setItem("book", JSON.stringify(storeBooks));
    toast.success("added");
  } else {
    toast.error("can't added");
  }
};
