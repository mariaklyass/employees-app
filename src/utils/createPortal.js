import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

export function CreatePortal({ children, containerId = "portal" }) {
  const [container, setContainer] = useState(null);

  useLayoutEffect(() => {
    let created = false;
    let element = document.getElementById(containerId);

    if (!element) {
      created = true;
      element = document.createElement("div");
      element.setAttribute("id", containerId);
      document.body.appendChild(element);
    }

    setContainer(element);

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [containerId]);

  if (!container) return null;

  return createPortal(children, container);
}
