import React from 'react';

export interface InfoDialogProps {
  className?: string;
  title: string;
  qrCode?: React.ReactNode | string;
  socialMedia?: React.ReactNode | string;
  buttonDisplay: string;
  address: string;
  // handleClose: () => void;
}

export interface DialogTitleProps {
  children: React.ReactNode;
  onClose: () => void;
}
