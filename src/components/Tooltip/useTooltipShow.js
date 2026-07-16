import { useCallback, useState } from 'react';

export const useTooltipShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = useCallback(() => setIsVisible(true), []);
  const hide = useCallback(() => setIsVisible(false), []);

  return { isVisible, show, hide };
};
