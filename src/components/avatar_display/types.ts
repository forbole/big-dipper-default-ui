import React from 'react';

export interface AvatarDisplayProps {
  imageUrl?: string;
  avatar?: React.ReactNode;
  title: string;
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}
