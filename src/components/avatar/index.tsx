import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { AvatarProps } from './types';

/**
 * Avatar Component
 */
const Avatar = (props:AvatarProps) => {
  const {
    imageUrl,
    alt,
    width,
    height,
    className,
  } = props;

  const { classes } = useGetStyles({
    width,
    height,
  });

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'avatar')}>
      <img src={imageUrl} alt={alt} className={classnames('image')} />
    </div>
  );
};

export default Avatar;
