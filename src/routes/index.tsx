import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Departamentos from "pages/Departamentos";
import Cirurgiões from "pages/Cirurgiões";
import História from "pages/História";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/departamentos" exact component={Departamentos} />
      <Route path="/cirurgioes" exact component={Cirurgiões} />
      <Route path="/nossahistoria" exact component={História} />
    </Switch>
  );
};

export default Routes;
