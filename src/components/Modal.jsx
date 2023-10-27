import { Button } from "./Button";
import { Icon } from "./Icon";
import { CreatePortal } from "../utils/createPortal";
import classes from "./Modal.module.css";

export function Modal({ children, opened, onClose }) {
  if (!opened) return null;

  return (
    <CreatePortal>
      <div aria-hidden className={classes.overlay} onClick={onClose} />
      <div className={classes.modal}>
        <Button className={classes.close} onClick={onClose} rounded>
          <Icon name="cross" size="sm" />
        </Button>
        {children}
      </div>
    </CreatePortal>
  );
}
