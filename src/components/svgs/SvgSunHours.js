import * as React from 'react';
export const SvgSunHours = ({ sunHoursPct, sunHoursDiffInHours, props }) => {
  const strokeDashoffset = ((251.2 * (100 - sunHoursPct)) / 100).toFixed(2);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      style={{
        transform: 'rotate(-200deg)',
      }}
      viewBox="-12.5 -12.5 125 125"
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        r={40}
        fill="transparent"
        stroke="#e0e0e0"
        strokeWidth={10}
      />
      <circle
        cx={50}
        cy={50}
        r={40}
        fill="transparent"
        stroke="#198754"
        strokeWidth={10}
        strokeDasharray={251.2}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
      <text
        x={-90}
        y={0}
        fill="#198754"
        fontSize={20}
        fontWeight="bold"
        style={{
          transform: 'rotate(200deg) translate(0,-20px)',
        }}
      >
        {sunHoursDiffInHours}
      </text>
    </svg>
  );
};
