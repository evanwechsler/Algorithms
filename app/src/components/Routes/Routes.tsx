import { ReactElement } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { mainRoutes } from "./config/routes";
import "./routes.scss";

export default function Routes(): ReactElement {
  return (
    <BrowserRouter>
      <div className="container main">
        <SideBar />
        <div className="content">
          <Switch>
            {mainRoutes.map(({ path, exact, component: Component }, index) => (
              <Route
                path={path}
                exact={exact}
                render={(props) => <Component {...props} />}
                key={index}
              />
            ))}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
