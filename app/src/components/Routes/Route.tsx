import { ReactElement } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { mainRoutes } from "./routes";

export default function Routes(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        {mainRoutes.map(({ path, exact, component: Component }) => {
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => <Component {...props} />}
          />;
        })}
      </Switch>
    </BrowserRouter>
  );
}
