import { useState } from 'react';

export const useRowHooks = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = (e:any) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return {
    open,
    toggleOpen,
  };
};
