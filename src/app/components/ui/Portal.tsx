"use client";

import { useState, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const portalRoot = document.getElementById("dialog");

    if (portalRoot) {
      setPortalElement(portalRoot);
    }

    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return mounted && portalElement
    ? ReactDOM.createPortal(children, portalElement)
    : null;
};

export default Portal;
