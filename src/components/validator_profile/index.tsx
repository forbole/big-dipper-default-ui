import React from 'react';
import classnames from 'classnames';
import {
  VpnKeyOutlined,
  CheckCircle,
  HomeOutlined,
} from '@material-ui/icons';
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
    website,
    keyBase,
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
      <div className={classnames('validator-profile__content')}>
        <div className={classnames('content__bio')}>
          {bio}
        </div>
        <div className={classnames('content__link', 'keybase')}>
          <VpnKeyOutlined />
          {keyBase.url ? (
            <div className={classnames('keybase__display')}>
              <a href={keyBase.url} target="_blank" rel="noreferrer">
                {keyBase.display}
              </a>
              {!!keyBase.verified && <CheckCircle />}
            </div>
          ) : (
            <div className={classnames('keybase__display')}>
              {keyBase.display}
              {!!keyBase.verified && <CheckCircle />}
            </div>
          )}
        </div>
        {!!website && (
        <div className={classnames('content__link', 'website')}>
          <HomeOutlined />
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </div>
        )}
      </div>
    </div>
  );
};

export default ValidatorProfile;
