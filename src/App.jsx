import { Route, Switch, NavLink } from "react-router-dom";

import Home from "./components/Home";
import PageNotFound from "./components/PageNotfound";
import Product from "./components/Product";

const App = () => (
  <>
    <div className="flex space-x-2">
      <NavLink exact activeClassName="underline font-bold" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="underline font-bold" to="/product">
        Product
      </NavLink>
    </div>
    <Switch>
      <Route component={Product} path="/product" />
      <Route component={Home} path="/" />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);

export default App;
