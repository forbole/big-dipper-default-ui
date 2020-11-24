import { useState } from 'react';

export const useRowHooks = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return {
    open,
    toggleOpen,
  };
};
