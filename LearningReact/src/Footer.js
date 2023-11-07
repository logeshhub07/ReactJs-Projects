import React from "react";

const Footer = ({ item }) => {
  return (
    <footer>
      {item} {item === 1 ? "list of item" : "list of items"}
    </footer>
  );
};

export default Footer;
