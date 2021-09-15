import {  BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import { Menu } from "pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/Menu" exact component={Menu} />
    </Switch>
  );
};

export default Routes;