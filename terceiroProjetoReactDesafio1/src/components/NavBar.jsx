import { Link } from "react-router-dom";
import "../App.css"

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/maria">Maria</Link>
        </li>
        <li>
          <Link to="/matheus">Matheus</Link>
        </li>
        <li>
          <Link to="/laura">Laura</Link>
        </li>
        <li>
          <Link to="/ana">Ana</Link>
        </li>
        <li>
          <Link to="/valentina">Valentina</Link>
        </li>
        <li>
          <Link to="/vitor">Vitor</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;