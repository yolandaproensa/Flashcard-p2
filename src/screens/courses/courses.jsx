import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card_reveal from "../../components/cards/card_reveal";
import api from "../../services/api";

function Courses() {
  const [cursos, setCursos] = useState([
    {
      colecaoId: 0,
      nome: "Nome do curso",
      descricao: "Descrição do curso",
    },
  ]);

  const pagina = 1;

  useEffect(() => {
    api.get("/colecoes").then((response) => setCursos(response.data));
  }, pagina);
  return (
    <>
      <h1>Cursos</h1>

      <div class="row">
        {cursos.map((curso) => (
          <Card_reveal curso={curso} />
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
