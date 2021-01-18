import React from 'react';

export interface InfoDialogProps {
  className?: string;
  handleClose?: () => void;
  open: boolean;
  title: string;
}

export interface DialogTitleProps {
  children: React.ReactNode;
  onClose: () => void;
}
