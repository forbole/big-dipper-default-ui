import React, { ReactElement } from 'react';

export interface InfoDialogProps {
  className?: string;
  title: string;
  qrCode?: ReactElement | string;
  socialMedia?: React.ReactNode | ReactElement;
  buttonDisplay: string;
  address: {
    display:string,
    rawValue: string,
  };
  copyCallback?: (value: string) => void;
}

export interface DialogTitleProps {
  children: React.ReactNode;
  onClose: () => void;
}
