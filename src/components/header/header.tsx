/* Use functional components when only rendering UI or for simple components */
import React from "react";
import { useSelector } from "react-redux";
import "./header.css";
import { getSampleData } from "../../lib/reducers/selectors";

function Header() {
  const value = useSelector(getSampleData);

  return (
    <div className="container">
      <div className="header">
        <p>Component Value: {value}</p>
      </div>
    </div>
  );
}

export default Header;
