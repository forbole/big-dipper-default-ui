import React from 'react';
import {
  Labels,
  Data,
} from '../../types';

export interface DialogProps {
  className?: string;
  handleClose: any;
  open: any;
  labels: Labels;
  data: Data[];
  desktop: boolean;
  title: string;
}

export interface DialogTitleProps {
  children: React.ReactNode;
  onClose: () => void;
}
