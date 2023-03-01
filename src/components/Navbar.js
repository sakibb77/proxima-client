import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto h-20 flex items-center justify-between border-b border-indigo-900">
      <Link className="2xl font-medium text-indigo-400" to={"/"}>
        Proxima
      </Link>

      <nav className="flex gap-5">
        <Link to={"/login"} className="hover:text-indigo-400 duration-300">
          Login
        </Link>
        <Link to={"/signup"} className="hover:text-indigo-400 duration-300">
          Signup
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
