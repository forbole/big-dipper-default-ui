import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { AvatarDisplayProps } from './types';

/**
 * Avatar Component
 */
const AvatarDisplay = (props:AvatarDisplayProps) => {
  const {
    imageUrl,
    alt,
    title,
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
      <div>{title}</div>
    </div>
  );
};

export default AvatarDisplay;
