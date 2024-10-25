import React, { useEffect } from "react";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Header from "./header/Header.component";
import { useUserStore } from "../store/user.store";
import { useBookStore } from "../store/book.store";
import { userService } from "../services/user.services";
import { bookService } from "../services/book.services";




export default function Layout({ children }) {
  const { user, setUser } = useUserStore();
  const { books, setBooks } = useBookStore();


  useEffect(() => {
    if (!user) {
      const loggedInUser = userService.getLoggedInUser()
      setUser(loggedInUser)

    }
    if (!books) {
      fetchBooks()
    }
  }, [])

  const fetchBooks = async () => {
    setBooks(await bookService.getBooks())
  }
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
