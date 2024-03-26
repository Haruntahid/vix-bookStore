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

export const getWishlistFromLS = () => {
  const getWishlist = localStorage.getItem("wishlist");
  if (getWishlist) {
    return JSON.parse(getWishlist);
  }
  return [];
};

export const setWishlistInLs = (id) => {
  const storeWishlist = getBookFromLS();
  if (!storeWishlist.includes(id)) {
    storeWishlist.push(id);
    localStorage.setItem("book", JSON.stringify(storeWishlist));
    toast.success("added");
  } else {
    toast.error("can't added");
  }
};
