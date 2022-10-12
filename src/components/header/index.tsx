/* Use functional components when only rendering UI or for simple components */
import { useCallback } from "react";
import { useSelector } from "react-redux"; // react hook
import { useNavigate } from "react-router-dom";
import { getSampleData } from "../../lib/selectors";
import NavButton from "../navButton";
import "./header.css";

function Header() {
  const value = useSelector(getSampleData);
  const navigate = useNavigate();

  const navigateToHome = useCallback(
    () => navigate("/home", { replace: true }),
    [navigate]
  );

  return (
    <div className="container">
      <div className="header">
        <p>Component Value: {value}</p>
      </div>
      <NavButton onClick={navigateToHome}>Home</NavButton>
    </div>
  );
}

export default Header;
