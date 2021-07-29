import { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { navLinks } from "../Routes/config/routes";
import Dropdown from "./Dropdown";
import "./sidebar.scss";

export default function SideBar(): ReactElement {
  const history = useHistory();
  return (
    <div className="side-bar">
      <h1 onClick={() => history.push("/")}>Algorithms</h1>
      {navLinks.map((link) => (
        <Dropdown title={link.title} path={link.path} key={link.path}>
          {link.subLinks.map((subLink, index) => (
            <p
              key={index}
              onClick={() => history.push(`${link.path}${subLink.path}`)}
            >
              {subLink.title}
            </p>
          ))}
        </Dropdown>
      ))}
    </div>
  );
}
