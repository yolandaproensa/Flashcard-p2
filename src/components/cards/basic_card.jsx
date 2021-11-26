function Basic_cards(props) {
  return (
    <div class="col s12 m4">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{props.titulo}</span>
          <p>{props.descricao}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  );
}
export default Basic_cards;
