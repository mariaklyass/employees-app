// navitem todo
import { NavItem } from "../components/NavItem";

import { MENU } from "../data/departments";
import classes from "./NavigateModule.module.css";

export function NavigateModule() {
  return (
    <ul className={classes.navigation}>
      <li>
        <NavItem to="/">All</NavItem>
      </li>
      {MENU.map((item, i) => (
        <li key={i}>
          <NavItem to={`department/${item.name}`}>{item.label}</NavItem>
        </li>
      ))}
    </ul>
  );
}
