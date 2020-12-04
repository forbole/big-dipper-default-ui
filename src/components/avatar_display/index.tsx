import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { AvatarDisplayProps } from './types';
import Avatar from '../avatar';

/**
 * AvatarDisplay Component
 */
const AvatarDisplay = (props: AvatarDisplayProps) => {
  const {
    imageUrl,
    alt,
    title,
    className,
  } = props;

  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'avatarDisplay')}>
      <Avatar imageUrl={imageUrl} alt={alt} width="1.5rem" height="1.5rem" className={classnames('img')} />
      <div className={classnames('display')}>{title}</div>
    </div>
  );
};

export default AvatarDisplay;
