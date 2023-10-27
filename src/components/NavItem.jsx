import clsx from "clsx";
import { NavLink } from "react-router-dom";

import styles from "./NavItem.module.css";

export function NavItem({ to, children, className }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(styles.link, isActive && styles.active, className)
      }
    >
      {children}
    </NavLink>
  );
}
