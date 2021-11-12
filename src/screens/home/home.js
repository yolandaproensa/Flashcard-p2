import Basic_cards from "../../components/cards/basic_card";
import Header from "../../components/header/header";

function Home() {
  return (
    <>
      <Header />
      <div class="row">
        <Basic_cards
          titulo="Savana"
          descricao="Vegetação baixa e clima quente"
        />
        <Basic_cards titulo="Tundra" descricao="Vegetação baixa e clima frio" />
        <Basic_cards
          titulo="Taiga"
          descricao="Vegetação de coníferas e clima quente"
        />
      </div>
    </>
  );
}

export default Home;
