import { SvgInfo } from '../svgs/SvgInfo';
import React, { useEffect, useRef } from 'react';
import { useTooltipShow } from '../../hooks/useTooltipShow';

export const Tooltip = ({ children }) => {
  const tooltipRef = useRef();
  const { isVisible, onMouseEnter, onMouseLeave } = useTooltipShow();

  useEffect(() => {
    const element = tooltipRef.current;
    element?.addEventListener('mouseenter', onMouseEnter);
    element?.addEventListener('mouseleave', onMouseLeave);
    return () => {
      element?.removeEventListener('mouseenter', onMouseEnter);
      element?.current?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseEnter, onMouseLeave]);

  return (
    <div
      className="d-inline-flex align-baseline position-relative"
      ref={tooltipRef}
    >
      <div className="mx-2">
        <SvgInfo />
      </div>
      {isVisible && children}
    </div>
  );
};
