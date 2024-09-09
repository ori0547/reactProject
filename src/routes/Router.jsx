import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import HomePage from "../pages/Home.page";


export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
}
