import React from 'react';
import {
  Labels,
  Data,
} from '../../types';

export interface DialogProps {
  className?: string;
  handleClose: () => void;
  open: boolean;
  labels: Labels;
  data: Data[];
  desktop: boolean;
  title: string;
}

export interface DialogTitleProps {
  children: React.ReactNode;
  onClose: () => void;
}
