import { createPortal } from 'react-dom';
import React from 'react';

/**
 * Renders children into a DOM node outside the parent hierarchy.
 * Useful for modals, tooltips, and dropdowns to avoid z-index/overflow issues.
 */
interface PortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
}

export function Portal({ children, container }: PortalProps) {
  const target = container || document.body;
  return createPortal(children, target);
}

/**
 * Creates or gets a portal container element.
 */
export function getPortalContainer(id = 'modalize-portal'): HTMLElement {
  let container = document.getElementById(id);
  if (!container) {
    container = document.createElement('div');
    container.id = id;
    document.body.appendChild(container);
  }
  return container;
}
