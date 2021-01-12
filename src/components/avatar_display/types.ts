import React from 'react';

export interface AvatarDisplayBase {
  imageUrl?: string;
  avatar?: React.ReactNode;
  title: string;
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export interface AvatarDisplayImage extends AvatarDisplayBase {
  imageUrl: string;
}

export interface AvatarDisplayComponents extends AvatarDisplayBase {
  avatar: React.ReactNode;
}

export type AvatarDisplayProps = AvatarDisplayImage | AvatarDisplayComponents;
