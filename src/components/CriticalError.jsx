import common_png from "/flyingSaucer.png";
import search_png from "/magnifyingGlass.png";
import clsx from "clsx";
import classes from "./CriticalError.module.css";

const ERROR_CONTENT = {
  common: {
    heading: "Some supreme mind broke everything",
    description: "We'll try to fix it a.s.a.p.",
    img: { common_png },
    actionText: "Try again",
  },
  search: {
    heading: "There isn't anyone matching the search parameters...",
    description: "Try smth else",
    img: { search_png },
  },
};

export function CriticalError(className, onAction) {
  const content = ERROR_CONTENT;

  return (
    <div className={clsx(classes.error, className)}>
      <img className={classes.icon} title={content.heading} img={content.img} />
      <h2 className={classes.heading}>{content.heading}</h2>
      <p className={classes.description}>{content.description}</p>
      {content.actionText && (
        <button
          className={classes.action}
          onClick={() => {
            onAction && onAction();
          }}
        >
          {content.actionText}
        </button>
      )}
    </div>
  );
}
