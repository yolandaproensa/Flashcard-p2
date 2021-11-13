import { useState } from "react";
import { Link } from "react-router-dom";
import Card_reveal from "../../components/cards/card_reveal";

function Courses() {
  const [cursos, setCursos] = useState([
    {
      colecaoId: 0,
      nome: "Nome do curso",
      descricao: "Descrição do curso",
    },
  ]);
  return (
    <>
      <h1>Cursos</h1>

      <div class="row">
        {cursos.map((curso) => (
          <Card_reveal curso={cursos} />
        ))}
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
