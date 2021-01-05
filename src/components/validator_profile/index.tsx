import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { AvatarDisplay } from '../..';

const ValidatorProfile = () => {
  const { classes } = useGetStyles();

  const props = {
    className: '',
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    alt: 'avatar image',
    title: 'Forbole',
    status: {
      display: 'Active',
      className: 'active',
    },
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim nibh eu ex ultrices, eget vehicula arcu auctor. Ut sed sem molestie eros tempus congue at eu lorem.',
  };

  const {
    className,
    imageUrl,
    alt,
    title,
    status,
    bio,
  } = props;

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-profile')}>
      <div>
        <AvatarDisplay
          imageUrl={imageUrl}
          alt={alt}
          title={title}
        />
        <div
          className={classnames(status.className, 'validator-profile__status')}
        >
          {status.display}
        </div>
      </div>
      <p>{bio}</p>
    </div>
  );
};

export default ValidatorProfile;
