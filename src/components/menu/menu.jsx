import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo" />
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Cursos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
