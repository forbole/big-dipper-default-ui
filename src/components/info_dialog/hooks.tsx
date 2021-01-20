import { useState } from 'react';

export const useInfoDialogHook = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleClickOpen,
    handleClose,
  };
};
