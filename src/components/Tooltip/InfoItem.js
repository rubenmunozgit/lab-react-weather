import React from 'react';

export const InfoItem = ({ label, value }) => {
  return (
    <div className="pe-2 fw-normal">
      <dt className="d-inline fw-normal text-body-secondary">{label}: </dt>
      <dd className="d-inline mb-0">{value}</dd>
    </div>
  );
};
