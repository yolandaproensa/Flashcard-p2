import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import api from "../../services/api";

function Formulario() {
  const history = useHistory();
  const { colecaoId } = useParams();
  const [dadosCurso, setDadosCurso] = useState({
    nome: "",
    descricao: "",
    publico: false,
  });

  function goBack() {
    history.push("/courses");
  }

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (colecaoId) {
      api.put("/colecoes/" + colecaoId, dadosCurso).then(goBack);
    } else {
      api.post("/colecoes", dadosCurso).then(goBack);
    }
  };

  useEffect(() => {
    api
      .get("/colecoes/" + colecaoId)
      .then((response) => setDadosCurso(response.data));
  }, colecaoId);

  return (
    <div class="row">
      <form class="col s12" onSubmit={handlerSubmit}>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="nome"
              type="text"
              class="validate"
              value={dadosCurso.nome}
              onChange={(event) =>
                setDadosCurso({ ...dadosCurso, nome: event.target.value })
              }
            />
            <label for="descricao">Nome</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea
              id="descricao"
              class="materialize-textarea"
              value={dadosCurso.descricao}
              onChange={(event) =>
                setDadosCurso({ ...dadosCurso, descricao: event.target.value })
              }
            ></textarea>
            <label for="descricao">Descrição</label>
          </div>
        </div>
        <div class="switch">
          <label>
            Público
            <input
              type="checkbox"
              checked={dadosCurso.publico}
              onChange={(event) =>
                setDadosCurso({ ...dadosCurso, publico: event.target.checked })
              }
            />
            <span class="lever"></span>
            Privado
          </label>
        </div>
        <div class="row" />
        <div class="input field col s12 m6" />
        <a class="waves-effect waves-light btn" onClick={goBack}>
          Cancelar
        </a>
        &nbsp;
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Salvar
          <i class="material-icons right"></i>
        </button>
      </form>
    </div>
  );
}
export default Formulario;
