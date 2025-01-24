export const InfoItem = ({ label, value }) => {
  return (
    <span
      className="align-middle p-0 pe-2 fw-normal"
      style={{ minWidth: 'max-content' }}
    >
      {label}: {value}
    </span>
  );
};
