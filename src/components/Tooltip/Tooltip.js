import { SvgInfo } from '../svgs/SvgInfo';
import React, { useId } from 'react';
import { useTooltipShow } from './useTooltipShow';

export const Tooltip = ({ children }) => {
  const tooltipId = useId();
  const { isVisible, show, hide } = useTooltipShow();

  return (
    <div
      className="d-inline-flex align-baseline position-relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      tabIndex={0}
      aria-describedby={isVisible ? tooltipId : undefined}
    >
      <div className="mx-2">
        <SvgInfo aria-hidden="true" />
      </div>
      {isVisible && (
        <div id={tooltipId} role="tooltip">
          {children}
        </div>
      )}
    </div>
  );
};
