import React from 'react';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';
import { useGetStyles } from './styles';
import { AvatarDisplay } from '../..';
import { ValidatorProfileProps } from './types';

const ValidatorProfile = (props: ValidatorProfileProps) => {
  const {
    className,
    imageUrl,
    alt,
    name,
    status,
    bio,
    desktopWidth,
  } = props;

  const { classes } = useGetStyles(desktopWidth);

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-profile')}>
      <div className={classnames('validator-profile__header')}>
        <div
          className={classnames(status.className, 'header__status')}
        >
          {status.display}
        </div>
        <AvatarDisplay
          width="2.5rem"
          height="2.5rem"
          imageUrl={imageUrl}
          alt={alt}
          title={name}
        />
      </div>
      <div>
        <ReactMarkdown source={bio} />
      </div>
    </div>
  );
};

export default ValidatorProfile;
