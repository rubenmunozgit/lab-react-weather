import { useCallback, useState } from 'react';

export const useTooltipShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);
  return {
    isVisible,
    onMouseEnter,
    onMouseLeave,
  };
};
