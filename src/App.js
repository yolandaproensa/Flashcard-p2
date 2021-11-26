import { Route, Switch } from "react-router-dom";
import Menu from "./components/menu/menu";
import Home from "./screens/home/home";
import Courses from "./screens/courses/courses";
import Formulario from "./screens/courses/formulario";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/courses/novo" component={Formulario} />
        <Route exact path="/courses/editar/:colecaoId" component={Formulario} />
      </Switch>
    </div>
  );
}

export default App;
