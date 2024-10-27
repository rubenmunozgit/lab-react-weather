import { getLinearGradient } from './backgroundColor';
import React from 'react';

const HEIGHT = '40px';

const ProgressDayMinMax = ({ min, max, percent, isC }) => {
  return (
    <div
      className="progress-stacked"
      style={{ height: 'auto', background: 'none' }}
    >
      <div
        className="progress"
        role="progressbar"
        aria-label="Segment one"
        aria-valuenow={min}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: '15%', height: HEIGHT }}
      >
        <div className="progress-bar fs-5">{min}</div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Segment two"
        aria-valuenow={max}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${percent}%`, height: HEIGHT }}
      >
        <div
          className="progress-bar text-dark fw-bold fs-5 text-end pe-4"
          style={{
            background: getLinearGradient(max, isC),
            borderRadius: '0 10px 10px 0',
          }}
        >
          {max}
        </div>
      </div>
    </div>
  );
};

export default ProgressDayMinMax;
