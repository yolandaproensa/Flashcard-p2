function Formulario() {
  return (
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="nome" type="text" class="validate" />
            <label for="descricao">Nome</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="descricao" class="materialize-textarea"></textarea>
            <label for="descricao">Descrição</label>
          </div>
        </div>
        <div class="switch">
          <label>
            Público
            <input type="checkbox" />
            <span class="lever"></span>
            Privado
          </label>
        </div>
        <div class="row" />
        <div class="input field col s12 m6" />
        <a class="waves-effect waves-light btn">Cancelar</a> &nbsp;
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Salvar
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
}
export default Formulario;
