import React from "react";

import classes from "./Divider.module.css";

export function Divider({ children }) {
  return (
    <div className={classes.divider}>
      {children && <div className={classes.divider__container}>{children}</div>}
    </div>
  );
}
