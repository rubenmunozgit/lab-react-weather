import { SvgInfo } from '../svgs/SvgInfo';
import { useEffect, useRef } from 'react';
import { useTooltipShow } from '../../hooks/useTooltipShow';

export const Tooltip = ({ children }) => {
  const tooltipRef = useRef(null);
  const { isVisible, onMouseEnter, onMouseLeave } = useTooltipShow();

  useEffect(() => {
    tooltipRef?.current?.addEventListener('mouseenter', onMouseEnter);
    tooltipRef?.current?.addEventListener('mouseleave', onMouseLeave);
    return () => {
      tooltipRef?.current?.removeEventListener('mouseenter', onMouseEnter);
      tooltipRef?.current?.removeEventListener('mouseleave', onMouseLeave);
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
      {isVisible && (
        <div
          className="position-absolute top-100 end-0 bg-light border border-secondary rounded p-2 z-1"
          style={{ minWidth: '-webkit-max-content' }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
