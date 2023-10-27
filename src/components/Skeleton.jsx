import clsx from "clsx";

import classes from "./Skeleton.module.css";

export function Skeleton({ className }) {
  return <div className={clsx(classes.skeleton, className)} />;
}
