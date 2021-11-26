import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

function Card_reveal(props) {
  const history = useHistory();
  const handlerExcluir = (event) => {
    event.preventDefault();

    if (window.confirm("Deseja excluir o curso" + props.index.nome + "?")) {
      api
        .delete("/colecoes/" + props.index.colecaoId)
        .then(() => history.go(0));
    }
  };

  return (
    <div class="col s12 m6 14">
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img
            class="activator"
            src="https://materializecss.com/images/office.jpg"
          />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {props.nome}
            <i class="material-icons right">more_vert</i>
          </span>
          <p>
            <Link to={"/courses/editar/" + props.colecaoId}> Editar </Link>
            <a href="#"> Excluir </a>
          </p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {props.nome}
            <i class="material-icons right">close</i>
          </span>
          <p>{props.descricao}</p>
        </div>
      </div>
    </div>
  );
}
export default Card_reveal;
