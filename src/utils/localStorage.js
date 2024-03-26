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
    toast.success("Added as Read");
  } else {
    toast.error("Book Already in Read list");
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
  const getStoredReadBook = getBookFromLS();
  const wishlist = getWishlistFromLS();
  if (!getStoredReadBook.includes(id) && !wishlist.includes(id)) {
    wishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Added as Wishlist");
  } else {
    toast.error("Book already in Read list.");
  }
};
