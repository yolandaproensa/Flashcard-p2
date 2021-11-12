import { Link } from "react-router-dom";
import Card_reveal from "../../components/cards/card_reveal";

function Courses() {
  return (
    <>
      <h1>Cursos</h1>

      <div class="row">
        <Card_reveal />
      </div>
      <Link to="/courses/novo">
        <a class="btn-floating btn-large waves-effect waves-light red">
          <i class="material-icons">add</i>
        </a>
      </Link>
    </>
  );
}
export default Courses;
