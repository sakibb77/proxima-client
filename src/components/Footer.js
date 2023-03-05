import React from "react";

const Footer = () => {
  return (
    <div className="py-8 flex items-center justify-center border-t border-indigo-900">
      &copy; {new Date().getFullYear()} Created By Sakib
    </div>
  );
};

export default Footer;
