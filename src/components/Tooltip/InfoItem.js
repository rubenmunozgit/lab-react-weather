export const InfoItem = ({ label, value }) => {
  return (
    <span className="pe-2 fw-normal">
      {label}: {value}
    </span>
  );
};
