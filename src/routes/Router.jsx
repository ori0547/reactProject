import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import HomePage from "../pages/Home.page";
import BookPage from "../pages/Book.page";
import FavoritesPage from "../pages/Favorites.page";
import Aboutpage from "../pages/About.page";
import LoginSignupPage from "../pages/LoginSignup.Page";
import EditBookPage from "../pages/EditBook.page";


export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.BOOKPAGE} element={<BookPage />} />
      <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTES.ABOUT} element={<Aboutpage />} />

      <Route path={ROUTES.ADD_BOOK} element={<EditBookPage />} />
      <Route path={ROUTES.EDIT_BOOK} element={<EditBookPage />} />

      <Route path={ROUTES.LOGIN_SIGNUP} element={<LoginSignupPage />} />
    </Routes>
  );
}
