/* Use functional components when only rendering UI or for simple components */
import { useSelector } from "react-redux";
import { getSampleData } from "../../lib/reducers/selectors";
import "./header.css";

function Header() {
  const value = useSelector(getSampleData);
  console.log(useSelector((state: any) => state));

  return (
    <div className="container">
      <div className="header">
        <p>Component Value: {value}</p>
      </div>
    </div>
  );
}

export default Header;