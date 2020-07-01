import * as React from 'react';
import { FC, useEffect, useRef } from 'react';

interface IProps {
  onOutsideTrigger: () => void;
}

const OutsideClose: FC<IProps> = ({ children, onOutsideTrigger }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOnOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (elementRef.current) {
        if (!elementContains(elementRef.current, target)) {
          onOutsideTrigger();
        }
      }
    };

    document.addEventListener('mousedown', handleOnOutsideClick, false);
    return () => {
      document.removeEventListener('mousedown', handleOnOutsideClick);
    };
  }, [onOutsideTrigger]);

  return <div ref={elementRef}>{children}</div>;
};

export const elementContains = (parent: HTMLElement, element: Node | null): boolean => {
  if (parent === element) {
    return true;
  } else if (!element) {
    return false;
  } else {
    return elementContains(parent, element.parentNode);
  }
};

export default OutsideClose;
