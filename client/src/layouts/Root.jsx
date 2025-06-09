import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <header>
        {" "}
        <Navbar></Navbar>
      </header>

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
