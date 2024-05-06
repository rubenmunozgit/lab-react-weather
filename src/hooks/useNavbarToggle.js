import { useState } from 'react';

export const useNavbarToggle = () => {
  const [collapse, setCollapsed] = useState(false);
  const toggleNav = () => {
    setCollapsed(!collapse);
  };

  return { collapse, toggleNav };
};
