import { ReactElement } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { sortingRoutes } from "src/components/Routes/config/routes";

export default function Sorting(): ReactElement {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h1>Sorting</h1>
        </Route>
        {sortingRoutes.map(
          ({ path: nestedPath, exact, component: Component }) => (
            <Route path={`${path}${nestedPath}`}>
              <Component />
            </Route>
          )
        )}
      </Switch>
    </div>
  );
}
