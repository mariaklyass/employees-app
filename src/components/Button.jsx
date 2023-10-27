import clsx from "clsx";

import classes from "./Button.module.css";

export function Button(
  className,
  active = false,
  rounded = false,
  children,
  onClick
) {
  return (
    <button
      className={clsx(
        className,
        classes.button,
        active && classes.button_sorted,
        rounded && classes.button_rounded
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
