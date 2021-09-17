import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Departamentos from "pages/Departamentos";
import Cirurgioes from "pages/Cirurgioes";
import Historia from "pages/Historia";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/departamentos" exact component={Departamentos} />
      <Route path="/cirurgioes" exact component={Cirurgioes} />
      <Route path="/nossahistoria" exact component={Historia} />
    </Switch>
  );
};

export default Routes;
