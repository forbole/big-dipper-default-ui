import { useState } from 'react';

export const useInfoDialogHook = ({ copyCallback }: any) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCopyClick = (value: string) => {
    if (copyCallback) {
      copyCallback(value);
    }
  };

  return {
    open,
    handleClickOpen,
    handleClose,
    handleCopyClick,
  };
};
