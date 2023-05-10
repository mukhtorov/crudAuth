import React from "react";
import { Navbar } from "../components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";

import { data } from "../utilits/navbar";
import { ReviewPage } from "../components/Review Page";
import Login from "../components/Login/Sign In";
import SignUp from "../components/Login/Sign Up";
import AddBook from "../components/AddBook";

export const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data.map((value) => {
          return (
            <Route key={value.id} path={value.path} element={value.element} />
          );
        })}

        <Route path="/book" element={<AddBook />} />
        <Route path="/home/:id" element={<ReviewPage />} />
        <Route path="/home/registration/signup" element={<SignUp />} />
      </Route>

      <Route path={"*"} element={<h1>404 NOT FOUND</h1>} />
      <Route path={"/"} element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
export default Root;
