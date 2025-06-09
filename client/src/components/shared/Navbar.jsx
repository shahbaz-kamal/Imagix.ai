import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Imagix.ai</a>
      </div>
      <div className="flex-none">
        <ul className=" ">
          <li className="flex gap-5">
            <Link to={"/"}>Home</Link>
            <Link>Images</Link>
            <Link to={"/generate"}>Generate Images</Link>
            <Link>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
