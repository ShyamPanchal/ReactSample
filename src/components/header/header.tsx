/* Use functional components when only rendering UI or for simple components */
import { useSelector } from "react-redux";
import { getSampleData } from "../../lib/selectors";
import "./header.css";

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
