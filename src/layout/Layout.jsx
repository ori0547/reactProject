import React, { useEffect } from "react";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { colors } from "@mui/material";
import Header from "./header/Header.component";
import { useUserStore } from "../store/user.store";
import { useBookStore } from "../store/book.store";
import { userService } from "../services/user.services";
import { booksMock } from "../utils/mocks/book.mock";




export default function Layout({ children }) {
  const { user, setUser } = useUserStore();
  const { books, setBooks } = useBookStore();


  useEffect(() => {
    if (!user) {
      const loggedInUser = userService.getLoggedInUser()
      setUser(loggedInUser)

    }
    if (!books) {
      setBooks(booksMock)
    }
  }, [])
  console.log(user);


  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
